import Enquiry from '../models/enquiry';

// Get all enquiries

const getAllEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.find().sort({ _id: -1 });
    res.status(200).json({
      success: true,
      message: 'All enquiries retrieved successfully',
      enquiry: enquiry,
      count: enquiry.length,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Post a new enquiry
// Route : /api/enquiry

const newEnquiry = async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.status(200).json({
      success: true,
      message: 'Enquiry created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { getAllEnquiry, newEnquiry };
