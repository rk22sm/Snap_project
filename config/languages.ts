export const languageOptions = [
    {
        language: "JavaScript",
        version: "18.15.0",
        imgUrl: "https://skillicons.dev/icons?i=javascript",
        aliases: ["node-javascript", "node-js", "javascript", "js"],
        runtime: "node",
    },
    {
        language: "TypeScript",
        version: "5.0.3",
        imgUrl: "https://skillicons.dev/icons?i=typescript",
        aliases: ["ts", "node-ts", "tsc", "typescript5", "ts5"],
    },
    {
        language: "Java",
        version: "15.0.2",
        imgUrl: "https://skillicons.dev/icons?i=java",
        aliases: [],
    },
    {
        language: "Python",
        version: "3.10.0",
        imgUrl: "https://skillicons.dev/icons?i=python",
        aliases: ["py", "py3", "python3", "python3.10"],
    },
    {
        language: "C",
        version: "10.2.0",
        imgUrl: "https://skillicons.dev/icons?i=c",
        aliases: ["gcc"],
        runtime: "gcc",
    },
    {
        language: "C#",
        version: "6.12.0",
        imgUrl: "https://skillicons.dev/icons?i=cs",
        aliases: ["mono", "mono-csharp", "mono-c#", "mono-cs", "c#", "cs"],
        runtime: "mono",
    },
    {
        language: "C++",
        version: "10.2.0",
        imgUrl: "https://skillicons.dev/icons?i=cpp",
        aliases: ["cpp", "g++"],
        runtime: "gcc",
    },
    {
        language: "Go",
        version: "1.16.2",
        imgUrl: "https://skillicons.dev/icons?i=go",
        aliases: ["go", "golang"],
    },
    {
        language: "Ruby",
        version: "3.0.1",
        imgUrl: "https://skillicons.dev/icons?i=ruby",
        aliases: ["ruby3", "rb"],
    },
    {
        language: "Rust",
        version: "1.68.2",
        imgUrl: "https://skillicons.dev/icons?i=rust",
        aliases: ["rs"],
    },
    {
        language: "Swift",
        version: "5.3",
        imgUrl: "https://skillicons.dev/icons?i=swift",
        aliases: ["swift5"],
    },
    {
        language: "Kotlin",
        version: "1.5.0",
        imgUrl: "https://skillicons.dev/icons?i=kotlin",
        aliases: ["kt"],
    },
    {
        language: "Perl",
        version: "5.32.0",
        imgUrl: "https://skillicons.dev/icons?i=perl",
        aliases: ["pl"],
    },
    {
        language: "Scala",
        version: "2.13.5",
        imgUrl: "https://skillicons.dev/icons?i=scala",
        aliases: ["scala2"],
    },
    {
        language: "Dart",
        version: "2.12.0",
        imgUrl: "https://skillicons.dev/icons?i=dart",
        aliases: ["dart2"],
    },
    {
        language: "Haskell",
        version: "8.10.4",
        imgUrl: "https://skillicons.dev/icons?i=haskell",
        aliases: ["hs"],
    },
    {
        language: "Elixir",
        version: "1.11.3",
        imgUrl: "https://skillicons.dev/icons?i=elixir",
        aliases: ["ex"],
    },
    {
        language: "R",
        version: "4.0.3",
        imgUrl: "https://skillicons.dev/icons?i=r",
        aliases: ["r"],
    },
    {
        language: "Bash",
        version: "5.1.0",
        imgUrl: "https://skillicons.dev/icons?i=bash",
        aliases: ["sh"],
    },
    {
        language: "PHP",
        version: "8.2.3",
        imgUrl: "https://skillicons.dev/icons?i=php",
        aliases: [],
    },
];

export const codeSnaps: { [key: string]: string } = {
    JavaScript: `console.log("Hello, World!");`,
    TypeScript: `console.log("Hello, World!");`,
    Java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    Python: `print("Hello, World!")`,
    C: `#include <stdio.h>
int main() {
  printf("Hello, World!");
  return 0;
}`,
    "C#": `using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
    "C++": `#include <iostream>
int main() {
  std::cout << "Hello, World!";
  return 0;
}`,
    Go: `package main
import "fmt"
func main() {
  fmt.Println("Hello, World!")
}`,
    Ruby: `puts "Hello, World!"`,
    Rust: `fn main() {
  println!("Hello, World!");
}`,
    Swift: `print("Hello, World!")`,
    Kotlin: `fun main() {
    println("Hello, World!")
}`,
    Perl: `print "Hello, World!\\n";`,
    Scala: `object HelloWorld {
    def main(args: Array[String]): Unit = {
        println("Hello, World!")
    }
}`,
    Dart: `void main() {
  print('Hello, World!');
}`,
    Haskell: `main = putStrLn "Hello, World!"`,
    Elixir: `IO.puts "Hello, World!"`,
    R: `print("Hello, World!")`,
    Bash: `echo "Hello, World!"`,
    PHP: `<?php echo "Hello, World!"; ?>`,
};
