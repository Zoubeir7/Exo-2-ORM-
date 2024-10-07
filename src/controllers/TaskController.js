import { Task } from "../models/TaskModel.js";


class TaskController {
    static async createTask(req, res) {
        try {
            const { title, description, status } = req.body;
            const newTask = await Task.create({ title, description, status });
            res.status(201).json({ taskId: newTask.id });
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la création de la tâche' });
        }
    }

    // Récupérer toutes les tâches
    static async getTasks(req, res) {
        try {
            const tasks = await Task.findAll();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération des tâches' });
        }
    }

    // Récupérer une tâche par ID
    static async getTaskById(req, res) {
        try {
            const task = await Task.findByPk(req.params.id);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ message: 'Tâche non trouvée' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération de la tâche' });
        }
    }

    // Mettre à jour une tâche
    static async updateTask(req, res) {
        try {
            const { title, description, status } = req.body;
            const [updatedRows] = await Task.update(
                { title, description, status },
                { where: { id: req.params.id } }
            );
            if (updatedRows > 0) {
                res.status(200).json({ message: 'Tâche mise à jour' });
            } else {
                res.status(404).json({ message: 'Tâche non trouvée' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la mise à jour de la tâche' });
        }
    }

    // Supprimer une tâche
    static async deleteTask(req, res) {
        try {
            const deletedRows = await Task.destroy({ where: { id: req.params.id } });
            if (deletedRows > 0) {
                res.status(200).json({ message: 'Tâche supprimée' });
            } else {
                res.status(404).json({ message: 'Tâche non trouvée' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la suppression de la tâche' });
        }
    }
}

export { TaskController };
