  import { createUser } from "../userService.js";

  describe("createUser", () => {

      test("deve criar usuário válido", () => {
        const user = createUser({ name: "João", age: 22 });

        expect(user.name).toBe("João");
        expect(user.age).toBe(22);
        expect(user.isActive).toBe(true);
        expect(user.roles).toEqual(["user"]);
      });

    test("deve lançar erro se não houver nome", () => {
      expect(() => {
        createUser({ age: 22 });
      }).toThrow("O nome do usuário é obrigatório.");
    });

    test("deve lançar erro se menor de idade", () => {
      expect(() => {
        createUser({ name: "João", age: 17 });
      }).toThrow("O usuário deve ser maior de idade.");
    });

  });