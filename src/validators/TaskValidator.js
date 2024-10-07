import { body } from 'express-validator';

const validateTask = [
    body('title').notEmpty().withMessage('Le titre est obligatoire'),
    body('description').notEmpty().withMessage('La description est obligatoire'),
    body('status').isIn(['pending', 'completed']).withMessage('Le statut doit être "pending" ou "completed"'),
];

export { validateTask };
