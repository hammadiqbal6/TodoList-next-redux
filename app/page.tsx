import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="sm:max-w-[640px] border border-black p-6 rounded-lg">
        <Header></Header>
        <TodoList></TodoList>
        <Footer></Footer>
      </div>
    </main>
  );
}
