export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Bem-vindo ao Pequeno Bistrô</h1>
      <p>Selecione uma função:</p>
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/cozinha">Tela da Cozinha</a></li>
      </ul>
    </main>
  );
}
