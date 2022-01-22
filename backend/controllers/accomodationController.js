import Accomodation from '../models/accomodation';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import cloudinary from 'cloudinary';
import absoluteUrl from 'next-absolute-url';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

// Setting up cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET_KEY,
});

const getAllAccomodation = catchAsyncErrors(async (req, res) => {
  const accomodation = await Accomodation.find();
  res.status(200).json({
    success: true,
    message: 'All  retrieved successfully',
    accomodation: accomodation,
    count: accomodation.length,
  });
});

// New accomodation route

const newAccomodation = catchAsyncErrors(async (req, res) => {
  const {
    name,
    roomSize,
    occupancy,
    description,
    highlights,
    price,
    breakfast,
    airConditioning,
    wifi,
    shower,
    minibar,
    tv,
    teacoffeeSet,
    swimmingPool,
    hairDryer,
    gallery: { panorama, mobile, roomdetails1, roomdetails2 },
  } = req.body;

  let splitHighlights = highlights.split(',').map((skill) => skill.trim());

  const panoramaResult = await cloudinary.v2.uploader.upload(panorama, {
    folder: 'nd/accomodation',
  });
  const mobileResult = await cloudinary.v2.uploader.upload(mobile, {
    folder: 'nd/accomodation',
  });
  const roomdetails1Result = await cloudinary.v2.uploader.upload(roomdetails1, {
    folder: 'nd/accomodation',
  });
  const roomdetails2Result = await cloudinary.v2.uploader.upload(roomdetails2, {
    folder: 'nd/accomodation',
  });

  const newAccomodation = await Accomodation.create({
    name: name,
    roomSize: roomSize,
    occupancy: occupancy,
    description: description,
    highlights: splitHighlights,
    price: price,
    breakfast: breakfast,
    airConditioning: airConditioning,
    wifi: wifi,
    shower: shower,
    minibar: minibar,
    tv: tv,
    teacoffeeSet: teacoffeeSet,
    swimmingPool: swimmingPool,
    hairDryer: hairDryer,
    gallery: {
      panorama: {
        public_id: panoramaResult.public_id,
        url: panoramaResult.secure_url,
      },
      mobile: {
        public_id: mobileResult.public_id,
        url: mobileResult.secure_url,
      },
      roomdetails1: {
        public_id: roomdetails1Result.public_id,
        url: roomdetails1Result.secure_url,
      },
      roomdetails2: {
        public_id: roomdetails2Result.public_id,
        url: roomdetails2Result.secure_url,
      },
    },
  });
  res.status(200).json({
    success: true,
    message: 'Accomodation created successfully',
    accomodation: newAccomodation,
  });
});

// Get a single accomodation

const getSingleAccomodation = catchAsyncErrors(async (req, res, next) => {
  const accomodation = await Accomodation.findById(req.query.id);
  if (!accomodation) {
    return next(new ErrorHandler('Accomodation not found with this ID', 404));
  }
  res.status(200).json({
    success: true,
    message: 'All Accomodation retrieved successfully',
    accomodation: accomodation,
  });
});

// Update Room

const updateAccomodation = catchAsyncErrors(async (req, res, next) => {
  let accomodation = await Accomodation.findById(req.query.id);
  let {
    gallery: { panorama, mobile, roomdetails1, roomdetails2 },
  } = accomodation;

  let panoramaResult;
  let mobileResult;
  let roomdetails1Result;
  let roomdetails2Result;

  if (req.body.gallery.panorama) {
    await cloudinary.v2.uploader.destroy(panorama.public_id, {
      folder: 'nd/accomodation',
    });

    panoramaResult = await cloudinary.v2.uploader.upload(
      req.body.gallery.panorama,
      {
        folder: 'nd/accomodation',
      }
    );
  }
  if (req.body.gallery.mobile) {
    await cloudinary.v2.uploader.destroy(mobile.public_id, {
      folder: 'nd/accomodation',
    });

    mobileResult = await cloudinary.v2.uploader.upload(
      req.body.gallery.mobile,
      {
        folder: 'nd/accomodation',
      }
    );
  }

  if (req.body.gallery.roomdetails1) {
    await cloudinary.v2.uploader.destroy(roomdetails1.public_id, {
      folder: 'nd/accomodation',
    });

    roomdetails1Result = await cloudinary.v2.uploader.upload(
      req.body.gallery.roomdetails1,
      {
        folder: 'nd/accomodation',
      }
    );
  }
  if (req.body.gallery.roomdetails2) {
    await cloudinary.v2.uploader.destroy(roomdetails2.public_id, {
      folder: 'nd/accomodation',
    });
    roomdetails2Result = await cloudinary.v2.uploader.upload(
      req.body.gallery.roomdetails2,
      {
        folder: 'nd/accomodation',
      }
    );
  }

  console.log(
    panoramaResult,
    mobileResult,
    roomdetails1Result,
    roomdetails2Result
  );

  req.body.gallery.panorama = {
    public_id: panoramaResult.public_id,
    url: panoramaResult.secure_url,
  };
  req.body.gallery.mobile = {
    public_id: mobileResult.public_id,
    url: mobileResult.secure_url,
  };

  req.body.gallery.roomdetails1 = {
    public_id: roomdetails1Result.public_id,
    url: roomdetails1Result.secure_url,
  };
  req.body.gallery.roomdetails2 = {
    public_id: roomdetails2Result.public_id,
    url: roomdetails2Result.secure_url,
  };

  if (!accomodation) {
    return next(new ErrorHandler('Accomodation not found with this ID', 404));
  }

  accomodation = await Accomodation.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: 'All Accomodation updated successfully',
    accomodation: accomodation,
  });
});
// Update Room

const deleteAccomodation = catchAsyncErrors(async (req, res, next) => {
  const accomodation = await Accomodation.findById(req.query.id);

  const {
    gallery: { panorama, mobile, roomdetails1, roomdetails2 },
  } = accomodation;

  if (!accomodation) {
    return next(new ErrorHandler('Accomodation not found with this ID', 404));
  }

  await cloudinary.v2.uploader.destroy(panorama.public_id);
  await cloudinary.v2.uploader.destroy(mobile.public_id);
  await cloudinary.v2.uploader.destroy(roomdetails1.public_id);
  await cloudinary.v2.uploader.destroy(roomdetails2.public_id);

  await accomodation.remove();

  res.status(200).json({
    success: true,
    message: 'Accomodation Deleted Successfully',
  });
});

const getAllAccomodationAdmin = catchAsyncErrors(async (req, res) => {
  const accomodation = await Accomodation.find();
  res.status(200).json({
    success: true,
    message: 'All  retrieved successfully',
    accomodation: accomodation,
    count: accomodation.length,
  });
});

export {
  getAllAccomodation,
  newAccomodation,
  getSingleAccomodation,
  updateAccomodation,
  deleteAccomodation,
  getAllAccomodationAdmin,
};
