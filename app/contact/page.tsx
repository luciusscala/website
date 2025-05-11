
export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen gideon-roman-regular">
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl leading-loose">this is my contact information.</h1>
        <br></br>
        <ol>
            <li>email: luciusscala@gmail.com</li>
        </ol>
      </main>
      
      <footer className="py-4 text-center text-sm">
        <h3><a href="contact" className="underline underline-offset-2">contact</a> <br></br> ls @ 2025</h3>
      </footer>
    </div>
  );
}