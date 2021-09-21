import { jest, expect, test } from "@jest/globals";
import Contenedor from "./contenedor";

test("save returns max id + 1: ", () => {
  const contenedor = new Contenedor();

  expect(contenedor.save()).toBe(4);
});
