import Link from 'next/link';

function SobrePage() {
  return (
    <div>
      <h1>Você está na página sobre!</h1>

      <ul>
        <li>
          <Link href="/">Ir para a página home!</Link>
        </li>
      </ul>
    </div>
  );
}

export default SobrePage;
