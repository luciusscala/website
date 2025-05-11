export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen gideon-roman-regular">
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl leading-loose">here are some projects</h1>
        <ol>
            <li>this is a project descriptoins</li>
            <li>this is also a project descriptions</li>
            <li>lasty, you guess it, this is a project description</li>
        </ol>
      </main>
      
      <footer className="py-4 text-center text-sm">
        <h3><a href="contact" className="underline underline-offset-2">contact</a> <br></br> ls @ 2025</h3>
      </footer>
    </div>
  );
}
