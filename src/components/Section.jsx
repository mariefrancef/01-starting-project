export default function Section({ title, children, ...props }) {
  // ...props : collect all other props (receive on Section component) and merge them into a props object
  return (
    <section {...props}>
      {/* {...props} : using it to spread some data,
    ensures that any additional accessories will be passed to this item*/}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
