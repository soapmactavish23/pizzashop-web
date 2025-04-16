import { OrderStatus } from "./order-status";
import { render } from "@testing-library/react";

describe("Order Status", () => {
  it("should display the right text based on order status", () => {
    // PEDING
    let wrapper = render(<OrderStatus status="pending" />);

    wrapper.debug();

    const statusText = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
  });
});
