export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  const ButtonsContainer = buttonsContainer;
  // if we don't use (const ButtonsContainer = buttonsContainer;) we can use ButtonsContainer as a prop

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
