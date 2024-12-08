// notifSlice.test.ts
import notifReducer, {
  newNotification,
  deleteNotification,
} from "../../redux/features/notifSlice";
import { INotification } from "../../models/INotification";

// Mock uuid to have consistent IDs in tests
jest.mock("uuid", () => ({
  v4: () => "test-id",
}));

describe("notification reducer", () => {
  const initialState: INotification[] = [];

  it("should handle initial state", () => {
    expect(notifReducer(undefined, { type: "unknown" })).toEqual([]);
  });

  describe("newNotification", () => {
    it("should add a new notification with correct structure", () => {
      const message = "Test notification";
      const actual = notifReducer(initialState, newNotification(message));

      expect(actual).toHaveLength(1);
      expect(actual[0]).toEqual({
        id: "test-id",
        message: message,
        color: expect.any(String),
      });
    });

    it("should assign a color from the predefined colors array", () => {
      const validColors = [
        "green",
        "blue",
        "pink",
        "gray",
        "orange",
        "indigo",
        "aquamarine",
        "slateblue",
        "purple",
        "cyan",
        "lime",
      ];

      const actual = notifReducer(initialState, newNotification("Test"));
      expect(validColors).toContain(actual[0].color);
    });
  });

  describe("deleteNotification", () => {
    it("should remove the specified notification", () => {
      // Add a notification first
      const state = notifReducer(initialState, newNotification("Test"));
      const notificationId = state[0].id;

      // Then delete it
      const actual = notifReducer(state, deleteNotification(notificationId));
      expect(actual.length).toBe(0);
    });

    it("should not modify state if notification id does not exist", () => {
      const state = [
        {
          id: "existing-id",
          message: "Test",
          color: "blue",
        },
      ];

      const actual = notifReducer(state, deleteNotification("non-existent-id"));
      expect(actual).toEqual(state);
    });

  });

  describe("action creators", () => {
    it("should create an action to add a notification", () => {
      const message = "Test notification";
      const expectedAction = {
        type: "notifSlice/newNotification",
        payload: message,
      };

      expect(newNotification(message)).toEqual(expectedAction);
    });

    it("should create an action to delete a notification", () => {
      const id = "test-id";
      const expectedAction = {
        type: "notifSlice/deleteNotification",
        payload: id,
      };

      expect(deleteNotification(id)).toEqual(expectedAction);
    });
  });

});
