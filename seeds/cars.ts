import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("cars").del();

  await knex("cars").insert([
    {
      id: "1",
      user_id: 1,
      name: "Ferrari",
      price: "10000000000",
      category: "small",
      image:
        "https://res.cloudinary.com/dkvhcraan/image/upload/v1716438308/secondCar_f12jzm.jpg",
      start_date: "2024/02/16",
      end_date: "2024/09/15",
      availability: true,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy: "admin",
      updatedBy: "admin",
    },
    {
      id: "2",
      user_id: 2,
      name: "Lamborghini Genie",
      price: "50000000000",
      category: "small",
      image:
        "https://res.cloudinary.com/dkvhcraan/image/upload/v1716438580/thirdCar_rbvorw.jpg",
      start_date: "2024/02/16",
      end_date: "2024/02/16",
      availability: false,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy: "admin",
      updatedBy: "admin",
    },
    {
      id: "3",
      user_id: 2,
      name: "Fiat Funto",
      price: "300000000",
      category: "small",
      image:
        "https://res.cloudinary.com/dkvhcraan/image/upload/v1716438297/firstCar_szddos.jpg",
      start_date: "2024/02/16",
      end_date: "2024/02/16",
      availability: true,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy: "admin",
      updatedBy: "admin",
    },
  ]);
}
