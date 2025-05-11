
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gideon-roman-regular">
      <main className="flex-1 flex flex-col items-center justify-center ">
        <h1 className="text-4xl leading-loose"> i'm lucius,<br></br>these are some things i like. </h1>
        <br></br>
        <h2 className="text-2xl"><a href="thisisalonglinkfornoreasonlolreaditandweepbitch"className="underline underline-offset-2"> projects</a></h2>
      </main>
      
      <footer className="py-4 text-center text-sm">
        <h3>
          <a href="contact" className="underline underline-offset-2">contact</a>
          <br></br> ls @ 2025
        </h3>
      </footer>
    </div>
  );
}
