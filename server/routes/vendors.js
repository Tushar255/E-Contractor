import express from 'express'
import { allRating, allReviews, createVendor, getVendors, isVendor, reviewAndRating, vendorDetailsForCustomer } from '../controllers/vendors.js';
import protect, { authRole } from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(protect, authRole('vendor'), createVendor)
router.route('/getVendors').post(protect, authRole('customer'), getVendors);
router.route('/isVendor').get(protect, isVendor);
router.route('/vendorDetails').post(protect, authRole('customer'), vendorDetailsForCustomer);
router.route('/reviews').post(protect, allReviews);
router.route('/ratings').post(protect, allRating);
router.route('/ratingsAndReviews').post(protect, reviewAndRating);

export default router;