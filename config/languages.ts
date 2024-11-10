// We are currently supporting total 40 Languages

export const languageOptions: Array<{
    name: string;
    version: string;
    imageURL: string;
}> = [
    {
        name: "bash",
        version: "5.2.0",
        imageURL: "https://skillicons.dev/icons?i=bash",
    },
    {
        name: "basic.net",
        version: "5.0.201",
        imageURL: "https://skillicons.dev/icons?i=dotnet",
    },
    {
        name: "c",
        version: "10.2.0",
        imageURL: "https://skillicons.dev/icons?i=c",
    },
    {
        name: "c++",
        version: "10.2.0",
        imageURL: "https://skillicons.dev/icons?i=cpp",
    },
    {
        name: "clojure",
        version: "1.10.3",
        imageURL: "https://skillicons.dev/icons?i=clojure",
    },
    {
        name: "coffeescript",
        version: "2.5.1",
        imageURL: "https://skillicons.dev/icons?i=coffeescript",
    },
    {
        name: "crystal",
        version: "0.36.1",
        imageURL: "https://skillicons.dev/icons?i=crystal",
    },
    {
        name: "csharp",
        version: "5.0.201",
        imageURL: "https://skillicons.dev/icons?i=cs",
    },
    {
        name: "dart",
        version: "2.19.6",
        imageURL: "https://skillicons.dev/icons?i=dart",
    },
    {
        name: "elixir",
        version: "1.11.3",
        imageURL: "https://skillicons.dev/icons?i=elixir",
    },
    {
        name: "emacs",
        version: "27.1.0",
        imageURL: "https://skillicons.dev/icons?i=emacs",
    },
    {
        name: "forth",
        version: "0.7.3",
        imageURL: "https://skillicons.dev/icons?i=forth",
    },
    {
        name: "fortran",
        version: "10.2.0",
        imageURL: "https://skillicons.dev/icons?i=fortran",
    },
    {
        name: "go",
        version: "1.16.2",
        imageURL: "https://skillicons.dev/icons?i=go",
    },
    {
        name: "haskell",
        version: "9.0.1",
        imageURL: "https://skillicons.dev/icons?i=haskell",
    },
    {
        name: "iverilog",
        version: "11.0.0",
        imageURL: "https://www.svgrepo.com/show/374163/verilog.svg",
    },
    {
        name: "java",
        version: "15.0.2",
        imageURL: "https://skillicons.dev/icons?i=java",
    },
    {
        name: "javascript",
        version: "18.15.0",
        imageURL: "https://skillicons.dev/icons?i=javascript",
    },
    {
        name: "julia",
        version: "1.8.5",
        imageURL: "https://skillicons.dev/icons?i=julia",
    },
    {
        name: "kotlin",
        version: "1.8.20",
        imageURL: "https://skillicons.dev/icons?i=kotlin",
    },
    {
        name: "lua",
        version: "5.4.4",
        imageURL: "https://skillicons.dev/icons?i=lua",
    },
    {
        name: "matlab",
        version: "22.7.4",
        imageURL: "https://www.svgrepo.com/show/373830/matlab.svg",
    },
    {
        name: "ocaml",
        version: "4.12.0",
        imageURL: "https://skillicons.dev/icons?i=ocaml",
    },
    {
        name: "octave",
        version: "8.1.0",
        imageURL: "https://skillicons.dev/icons?i=octave",
    },
    {
        name: "pascal",
        version: "3.2.2",
        imageURL: "https://cryptologos.cc/logos/pascal-pasc-logo.svg",
    },
    {
        name: "perl",
        version: "5.36.0",
        imageURL: "https://skillicons.dev/icons?i=perl",
    },
    {
        name: "php",
        version: "8.2.3",
        imageURL: "https://skillicons.dev/icons?i=php",
    },
    {
        name: "powershell",
        version: "7.1.4",
        imageURL: "https://skillicons.dev/icons?i=powershell",
    },
    {
        name: "prolog",
        version: "8.2.4",
        imageURL: "https://www.svgrepo.com/show/374005/prolog.svg",
    },
    {
        name: "python",
        version: "3.10.0",
        imageURL: "https://skillicons.dev/icons?i=python",
    },
    {
        name: "racket",
        version: "8.3.0",
        imageURL: "https://www.svgrepo.com/show/374028/racket.svg",
    },
    {
        name: "rscript",
        version: "4.1.1",
        imageURL: "https://skillicons.dev/icons?i=r",
    },
    {
        name: "ruby",
        version: "3.0.1",
        imageURL: "https://skillicons.dev/icons?i=ruby",
    },
    {
        name: "rust",
        version: "1.68.2",
        imageURL: "https://skillicons.dev/icons?i=rust",
    },
    {
        name: "scala",
        version: "3.2.2",
        imageURL: "https://skillicons.dev/icons?i=scala",
    },
    {
        name: "sqlite3",
        version: "3.36.0",
        imageURL: "https://skillicons.dev/icons?i=sqlite",
    },
    {
        name: "swift",
        version: "5.3.3",
        imageURL: "https://skillicons.dev/icons?i=swift",
    },
    {
        name: "typescript",
        version: "5.0.3",
        imageURL: "https://skillicons.dev/icons?i=typescript",
    },
    {
        name: "vlang",
        version: "0.3.3",
        imageURL: "https://skillicons.dev/icons?i=v",
    },
    {
        name: "zig",
        version: "0.10.1",
        imageURL: "https://skillicons.dev/icons?i=zig",
    },
];

export const codeSnaps: { [key: string]: string } = {
    bash: `echo "Hello, World!"`,
    c: `#include <stdio.h>
    int main() {
      printf("Hello, World!");
      return 0;
    }`,
    cs: `using System;
    class Program {
        static void Main() {
            Console.WriteLine("Hello, World!");
        }
    }`,
    cpp: `#include <iostream>
    int main() {
      std::cout << "Hello, World!";
      return 0;
    }`,
    dart: `void main() {
      print('Hello, World!');
    }`,
    elixir: `IO.puts "Hello, World!"`,
    go: `package main
    import "fmt"
    func main() {
      fmt.Println("Hello, World!")
    }`,
    haskell: `main = putStrLn "Hello, World!"`,
    java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        }
    }`,
    javascript: `console.log("Hello, World!");`,
    kotlin: `fun main() {
    println("Hello, World!")
    }`,
    perl: `print "Hello, World!\\n";`,
    php: `<?php echo "Hello, World!"; ?>`,
    prolog: `write('Hello, World!').`,
    python: `print("Hello, World!")`,
    rscript: `cat("Hello, world!\\n")`,
    ruby: `puts "Hello, World!"`,
    rust: `fn main() {
    println!("Hello, World!");
    }`,
    swift: `print("Hello, World!")`,
    typescript: `console.log("Hello, World!");`,
};
