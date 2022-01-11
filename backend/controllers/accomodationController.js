import Accomodation from '../models/accomodation';

const getAllAccomodation = async (req, res) => {
  try {
    const accomodation = await Accomodation.find();
    res.status(200).json({
      success: true,
      message: 'All rooms retrieved successfully',
      accomodation: accomodation,
      count: accomodation.length,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// New accomodation route

const newAccomodation = async (req, res) => {
  try {
    const accomodation = await Accomodation.create(req.body);
    res.status(200).json({
      success: true,
      message: 'Accomodation created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get a single accomodation

const getSingleAccomodation = async (req, res) => {
  try {
    const accomodation = await Accomodation.findById(req.query.id);
    if (!accomodation) {
      res.status(400).json({
        success: false,
        message: 'Room not found with this ID',
      });
    }
    res.status(200).json({
      success: true,
      message: 'All rooms retrieved successfully',
      accomodation: accomodation,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { getAllAccomodation, newAccomodation, getSingleAccomodation };
