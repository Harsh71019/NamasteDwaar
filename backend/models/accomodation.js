const mongoose = require('mongoose');

const accomodationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter room name'],
    trim: true,
    maxLength: [100, 'Room name cannot exceed 100 characters'],
  },
  roomSize: {
    type: Number,
    required: [true, 'Please enter room size'],
    default: 0.0,
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Please enter room price per night'],
    default: 0.0,
  },
  occupancy: {
    type: Number,
    required: [true, 'Please enter maximum room occupancy'],
    default: 0,
  },
  description: {
    type: String,
    required: [true, 'Please enter room description'],
  },
  highlights: [String],
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioning: {
    type: Boolean,
    default: false,
  },
  wifi: {
    type: Boolean,
    default: false,
  },
  shower: {
    type: Boolean,
    default: false,
  },
  minibar: {
    type: Boolean,
    default: false,
  },
  tv: {
    type: Boolean,
    default: false,
  },
  swimmingPool: {
    type: Boolean,
    default: false,
  },
  teacoffeeSet: {
    type: Boolean,
    default: false,
  },
  hairDryer: {
    type: Boolean,
    default: false,
  },
  pdfBrochure: {
    type: String,
  },

  gallery: {
    panorama: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    mobile: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    roomdetails1: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    roomdetails2: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },

  roomCount: {
    type: Number,
    default: 0,
    required: true,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.Accomodation ||
  mongoose.model('Accomodation', accomodationSchema);
