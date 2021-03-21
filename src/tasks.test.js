import actions from "./tasks.js";

describe("action", () => {
  test("action", () => {
    const task = "買い物";
    const result = actions.addTask(task);

    const expected = {
      type: "ADD_TASK",
      payload: { task}
    };

    expect(result).toEqual(expected);
  })
});
