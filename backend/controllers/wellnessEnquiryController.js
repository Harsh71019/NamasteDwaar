import WellnessEnquiry from '../models/wellnessEnquiry';

// Get all wellness enquiries

const getAllWellnessEnquiry = async (req, res) => {
  try {
    const wellnessEnquiry = await WellnessEnquiry.find().sort({ _id: -1 });
    res.status(200).json({
      success: true,
      message: 'All Wellness enquiries retrieved successfully',
      enquiry: wellnessEnquiry,
      count: wellnessEnquiry.length,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Post a new  wellness enquiry
// Route : /api/enquiry

const newWellnessEnquiry = async (req, res) => {
  try {
    const newWellnessEnquiry = await WellnessEnquiry.create(req.body);
    res.status(200).json({
      success: true,
      message: 'Wellness Enquiry created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { getAllWellnessEnquiry, newWellnessEnquiry };
