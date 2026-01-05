import { userRepository } from "../repository/user.js";
import bycrypt from "bcrypt";
import { generateToken } from "../../../utils/jwtAuth.js";

class UserService {
	async createUser(data) {
	const hashedPassword = await bycrypt.hash(data.contrasena, 10); // Se agrega hash a la contraseña
		return await userRepository.create({ ...data, contrasena: hashedPassword });
	}

	async getAllUsers() {
		return await userRepository.findAll();
	}

	async getUserById(id) {
		return await userRepository.findById(id);
	}

	async updateUser(id, data) {
		return await userRepository.update(id, data);
	}

	async deleteUser(id) {
		return await userRepository.delete(id);
	}

	async login(credentials) {
		const user = await userRepository.findByEmail(credentials.correo);
		if (!user) {
			throw new Error("Email o contraseña incorrectos (email)");
		}
		const isValidPassword = await bycrypt.compare(credentials.contrasena, user.contrasena);
		if (!isValidPassword) {
			throw new Error("Email o contraseña incorrectos (password)");
		}
		return { ...user, token: generateToken({ id: user.id, email: user.correo }) };
	}
}

const userService = new UserService();
export { userService };
