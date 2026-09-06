import Student from "../Models/studentModel.js";

// Create student
export const createStudent = async (req, res) => {
    try {
        const { name, registrationNumber, email } = req.body;

        if (!name || !registrationNumber || !email) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const student = await Student.create({
            name,
            registrationNumber,
            email
        });

        res.status(201).json({
            message: "Student created successfully",
            student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get student
export const getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Update student
export const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete student
export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};