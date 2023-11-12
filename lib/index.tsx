export const generatedAmount = (number = 8) => {
  return Array.from({ length: number }, (_, index) => {
    let amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
