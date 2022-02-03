import mongoose from 'mongoose';
import timeZone from 'mongoose-timezone';

const wellnessSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  detailsDescription: {
    type: String,
    required: true,
  },
  detailsTitle: {
    type: String,
    required: true,
  },
  img: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  detailsImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  recommendedt1: { type: String, required: true },
  recommendedc1: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  recommendedt2: { type: String, required: true },
  recommendedc2: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  recommendedt3: { type: String, required: true },
  recommendedc3: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  inclusions: [String],
  inclusionsImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  benefits: [String],
  benefitsImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  noData: {
    type: Boolean,
    default: false,
  },

  days: [
    {
      noOfDays: {
        type: String,
        required: true,
      },
      session: [
        {
          name: {
            type: String,
            required: true,
          },
          noOfSessions: {
            type: Number,
            required: [
              true,
              'Please enter the no of session with each session name',
            ],
            default: 0.0,
          },
        },
      ],
      price: {
        type: Number,
        required: [true, 'Please enter the price for each'],
        default: 0.0,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

wellnessSchema.plugin(timeZone);

export default mongoose.models.Wellness ||
  mongoose.model('Wellness', wellnessSchema);
