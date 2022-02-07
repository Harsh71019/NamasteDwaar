import Wellness from '../models/wellness';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

// Setting up cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET_KEY,
});

const newWellness = catchAsyncErrors(async (req, res) => {
  const {
    title,
    description,
    img,
    duration,
    detailsDescription,
    detailsTitle,
    detailsImage,
    recommendedt1,
    recommendedc1,
    recommendedt2,
    recommendedc2,
    recommendedt3,
    recommendedc3,
    benefits,
    benefitsImage,
    inclusions,
    inclusionsImage,
    noData,
    days,
  } = req.body;

  let reformattedArray = days.map((sessionss) => {
    const result = sessionss.session.reduce(function (acc, obj) {
      return acc + obj.noOfSessions;
    }, 0);

    sessionss['totalSession'] = result;
    return sessionss;
  });

  let benefitsHighlights = benefits.split(',').map((skill) => skill.trim());
  let inclusionsHighlights = inclusions.split(',').map((skill) => skill.trim());

  const c1 = await cloudinary.v2.uploader.upload(recommendedc1, {
    folder: 'nd/wellness',
  });
  const c2 = await cloudinary.v2.uploader.upload(recommendedc2, {
    folder: 'nd/wellness',
  });
  const c3 = await cloudinary.v2.uploader.upload(recommendedc3, {
    folder: 'nd/wellness',
  });
  const imgMain = await cloudinary.v2.uploader.upload(img, {
    folder: 'nd/wellness',
  });
  const imgDetails = await cloudinary.v2.uploader.upload(detailsImage, {
    folder: 'nd/wellness',
  });
  const benefitImage = await cloudinary.v2.uploader.upload(benefitsImage, {
    folder: 'nd/wellness',
  });
  const inclusionImage = await cloudinary.v2.uploader.upload(inclusionsImage, {
    folder: 'nd/wellness',
  });

  const newWellness = await Wellness.create({
    title: title,
    description: description,
    detailsDescription: detailsDescription,
    detailsTitle: detailsTitle,
    img: {
      public_id: imgMain.public_id,
      url: imgMain.secure_url,
    },
    detailsImage: {
      public_id: imgDetails.public_id,
      url: imgDetails.secure_url,
    },
    recommendedt1: recommendedt1,
    recommendedt2: recommendedt2,
    recommendedt3: recommendedt3,
    recommendedc1: {
      public_id: c1.public_id,
      url: c1.secure_url,
    },
    recommendedc2: {
      public_id: c2.public_id,
      url: c2.secure_url,
    },
    recommendedc3: {
      public_id: c3.public_id,
      url: c3.secure_url,
    },
    inclusions: inclusionsHighlights,
    inclusionsImage: {
      public_id: inclusionImage.public_id,
      url: inclusionImage.secure_url,
    },
    benefits: benefitsHighlights,
    benefitsImage: {
      public_id: benefitImage.public_id,
      url: benefitImage.secure_url,
    },
    noData: noData,
    days: days,
    duration: duration,
  });

  res.status(200).json({
    success: true,
    message: 'Wellness created successfully',
    wellness: newWellness,
  });
});

const getAllWellness = catchAsyncErrors(async (req, res) => {
  const wellness = await Wellness.find();
  res.status(200).json({
    success: true,
    message: 'All Wellness Packages retrieved successfully',
    wellness: wellness,
    count: wellness.length,
  });
});

// Get a single accomodation

const getSingleWellness = catchAsyncErrors(async (req, res, next) => {
  const wellness = await Wellness.findById(req.query.id);
  if (!wellness) {
    return next(new ErrorHandler('Wellness not found with this ID', 404));
  }
  res.status(200).json({
    success: true,
    message: 'Wellness Details retrieved successfully',
    wellness: wellness,
  });
});

const deleteWellness = catchAsyncErrors(async (req, res, next) => {
  const wellness = await Wellness.findById(req.query.id);
  console.log(wellness);

  const {
    inclusionsImage,
    recommendedc1,
    recommendedc2,
    recommendedc3,
    img,
    detailsImage,
    benefitsImage,
  } = wellness;

  if (!wellness) {
    return next(
      new ErrorHandler('Wellness Package not found with this ID', 404)
    );
  }

  await cloudinary.v2.uploader.destroy(inclusionsImage.public_id);
  await cloudinary.v2.uploader.destroy(recommendedc1.public_id);
  await cloudinary.v2.uploader.destroy(recommendedc2.public_id);
  await cloudinary.v2.uploader.destroy(recommendedc3.public_id);
  await cloudinary.v2.uploader.destroy(img.public_id);
  await cloudinary.v2.uploader.destroy(detailsImage.public_id);
  await cloudinary.v2.uploader.destroy(benefitsImage.public_id);

  await wellness.remove();

  res.status(200).json({
    success: true,
    message: 'Wellness Deleted Successfully',
  });
});

export { newWellness, getAllWellness, getSingleWellness, deleteWellness };
