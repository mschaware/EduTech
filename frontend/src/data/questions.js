const questionsData = {
  javascript: {
    easy: [
      {
        question: "What does JS stand for?",
        options: [{ text: "JavaScript", isCorrect: true }, { text: "Java", isCorrect: false }]
      },
      {
        question: "Which keyword is used to declare variables?",
        options: [{ text: "let", isCorrect: true }, { text: "var", isCorrect: false }]
      },
      {
        question: "Which of the following is not a JavaScript data type?",
        options: [
          { text: "Boolean", isCorrect: false },
          { text: "Float", isCorrect: true }
        ]
      },
      {
        question: "What is the output of 'typeof null' in JavaScript?",
        options: [
          { text: "object", isCorrect: true },
          { text: "null", isCorrect: false }
        ]
      },
      {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
          { text: "//", isCorrect: true },
          { text: "/* */", isCorrect: false }
        ]
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        options: [
          { text: "alert('Hello World');", isCorrect: true },
          { text: "msg('Hello World');", isCorrect: false }
        ]
      },
      {
        question: "Which method can be used to find the length of a string?",
        options: [
          { text: "length", isCorrect: true },
          { text: "size", isCorrect: false }
        ]
      },
      {
        question: "Which function is used to parse a string into a number in JavaScript?",
        options: [
          { text: "parseInt()", isCorrect: true },
          { text: "toInteger()", isCorrect: false }
        ]
      },
      {
        question: "What will '3' + 2 evaluate to in JavaScript?",
        options: [
          { text: "'32'", isCorrect: true },
          { text: "5", isCorrect: false }
        ]
      },
      {
        question: "Which event is triggered when a user clicks an HTML element?",
        options: [
          { text: "onclick", isCorrect: true },
          { text: "onhover", isCorrect: false }
        ]
      }
    ],
    medium: [
      {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
          { text: "Refers to the current object", isCorrect: true },
          { text: "Creates a new variable", isCorrect: false }
        ]
      },
      {
        question: "Which built-in method sorts an array?",
        options: [
          { text: "sort()", isCorrect: true },
          { text: "order()", isCorrect: false }
        ]
      },
      {
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: [
          { text: "'===' checks value and type, '==' only checks value", isCorrect: true },
          { text: "They both work the same", isCorrect: false }
        ]
      },
      {
        question: "How do you create an arrow function in JavaScript?",
        options: [
          { text: "()=>{}", isCorrect: true },
          { text: "function(){}", isCorrect: false }
        ]
      },
      {
        question: "Which method is used to remove the last element of an array?",
        options: [
          { text: "pop()", isCorrect: true },
          { text: "shift()", isCorrect: false }
        ]
      },
      {
        question: "What does JSON stand for?",
        options: [
          { text: "JavaScript Object Notation", isCorrect: true },
          { text: "Java Standard Output Name", isCorrect: false }
        ]
      },
      {
        question: "What is the output of typeof NaN?",
        options: [
          { text: "number", isCorrect: true },
          { text: "NaN", isCorrect: false }
        ]
      },
      {
        question: "Which loop is guaranteed to execute at least once?",
        options: [
          { text: "do...while", isCorrect: true },
          { text: "while", isCorrect: false }
        ]
      },
      {
        question: "Which JavaScript method is used to find an index of an element in an array?",
        options: [
          { text: "indexOf()", isCorrect: true },
          { text: "findIndex()", isCorrect: false }
        ]
      },
      {
        question: "How do you deep copy an object in JavaScript?",
        options: [
          { text: "JSON.parse(JSON.stringify(obj))", isCorrect: true },
          { text: "Object.assign({}, obj)", isCorrect: false }
        ]
      }
    ],
    hard: [
      {
        question: "Explain the concept of closures in JavaScript.",
        options: [
          { text: "A function having access to its outer function's variables", isCorrect: true },
          { text: "A function that cannot access outer variables", isCorrect: false }
        ]
      },
      {
        question: "What is the purpose of the event loop in JavaScript?",
        options: [
          { text: "Handles asynchronous operations", isCorrect: true },
          { text: "Executes synchronous code only", isCorrect: false }
        ]
      }
    ]
  },
  python: {
    easy: [
      { question: "What is the correct file extension for Python files?", options: [{ text: ".py", isCorrect: true }, { text: ".python", isCorrect: false }] },
      { question: "How do you print 'Hello, World!' in Python?", options: [{ text: "print('Hello, World!')", isCorrect: true }, { text: "echo 'Hello, World!'", isCorrect: false }] },
      { question: "What keyword is used to define a function in Python?", options: [{ text: "def", isCorrect: true }, { text: "function", isCorrect: false }] },
      { question: "How do you take user input in Python?", options: [{ text: "input()", isCorrect: true }, { text: "get()", isCorrect: false }] },
      { question: "What is the output of len('Python')?", options: [{ text: "6", isCorrect: true }, { text: "7", isCorrect: false }] },
      { question: "What data type is returned by type(3.14)?", options: [{ text: "float", isCorrect: true }, { text: "int", isCorrect: false }] },
      { question: "How do you write a single-line comment in Python?", options: [{ text: "#", isCorrect: true }, { text: "//", isCorrect: false }] },
      { question: "What is the result of 5 // 2?", options: [{ text: "2", isCorrect: true }, { text: "2.5", isCorrect: false }] },
      { question: "What keyword is used to create a loop in Python?", options: [{ text: "for", isCorrect: true }, { text: "repeat", isCorrect: false }] },
      { question: "What is the result of bool([]) in Python?", options: [{ text: "False", isCorrect: true }, { text: "True", isCorrect: false }] }
    ],
    medium: [
      { question: "What is the difference between 'is' and '==' in Python?", options: [{ text: "'is' checks identity, '==' checks value", isCorrect: true }, { text: "They are the same", isCorrect: false }] },
      { question: "How do you create a dictionary in Python?", options: [{ text: "{}", isCorrect: true }, { text: "[]", isCorrect: false }] },
      { question: "What does lambda do in Python?", options: [{ text: "Creates anonymous functions", isCorrect: true }, { text: "Defines a loop", isCorrect: false }] },
      { question: "What is the output of list(range(1, 10, 2))?", options: [{ text: "[1, 3, 5, 7, 9]", isCorrect: true }, { text: "[1, 2, 3, 4, 5, 6, 7, 8, 9]", isCorrect: false }] },
      { question: "What is the use of the zip() function in Python?", options: [{ text: "Combines multiple iterables", isCorrect: true }, { text: "Sorts lists", isCorrect: false }] },
      { question: "How do you handle exceptions in Python?", options: [{ text: "try-except", isCorrect: true }, { text: "if-else", isCorrect: false }] },
      { question: "What does *args and **kwargs mean in Python functions?", options: [{ text: "Variable-length arguments", isCorrect: true }, { text: "Loop variables", isCorrect: false }] },
      { question: "How can you merge two lists into a single list?", options: [{ text: "list1 + list2", isCorrect: true }, { text: "merge(list1, list2)", isCorrect: false }] },
      { question: "How do you remove duplicates from a list in Python?", options: [{ text: "set(list)", isCorrect: true }, { text: "unique(list)", isCorrect: false }] },
      { question: "What is the difference between deepcopy() and copy()?", options: [{ text: "deepcopy creates a full independent copy", isCorrect: true }, { text: "Both are the same", isCorrect: false }] }
    ],
    hard: [
      { question: "What are Python decorators, and how are they used?", options: [{ text: "Functions modifying other functions", isCorrect: true }, { text: "A type of loop", isCorrect: false }] },
      { question: "What is the purpose of __init__ in Python classes?", options: [{ text: "Initialize object attributes", isCorrect: true }, { text: "Delete an object", isCorrect: false }] },
      { question: "What is the difference between multiprocessing and multithreading?", options: [{ text: "Separate processes vs. shared threads", isCorrect: true }, { text: "They are the same", isCorrect: false }] },
      { question: "How does garbage collection work in Python?", options: [{ text: "Uses reference counting", isCorrect: true }, { text: "Manual memory management", isCorrect: false }] },
      { question: "What are metaclasses in Python?", options: [{ text: "Classes that define other classes", isCorrect: true }, { text: "A function decorator", isCorrect: false }] },
      { question: "Explain the Global Interpreter Lock (GIL) in Python.", options: [{ text: "Prevents true parallelism in threads", isCorrect: true }, { text: "Speeds up execution", isCorrect: false }] },
      { question: "What are generators in Python, and how do they work?", options: [{ text: "Functions that yield values lazily", isCorrect: true }, { text: "A type of loop", isCorrect: false }] },
      { question: "What is memoization in Python, and how is it implemented?", options: [{ text: "Caching function results", isCorrect: true }, { text: "Storing variables", isCorrect: false }] },
      { question: "What is the difference between @staticmethod, @classmethod, and an instance method?", options: [{ text: "Different ways to define class methods", isCorrect: true }, { text: "They all work the same", isCorrect: false }] },
      { question: "How does Python’s memory management work?", options: [{ text: "Automatic with garbage collection", isCorrect: true }, { text: "Requires manual allocation", isCorrect: false }] }
    ]
  },
  java: {
    easy: [
      { question: "What is Java primarily used for?", options: [{ text: "Building applications", isCorrect: true }, { text: "Operating systems", isCorrect: false }] },
      { question: "Which keyword is used to define a class in Java?", options: [{ text: "class", isCorrect: true }, { text: "define", isCorrect: false }] },
      { question: "Which data type is used for decimal values?", options: [{ text: "double", isCorrect: true }, { text: "int", isCorrect: false }] },
      { question: "Which operator is used for comparison?", options: [{ text: "==", isCorrect: true }, { text: "=" , isCorrect: false }] },
      { question: "Which loop is used for iteration?", options: [{ text: "for", isCorrect: true }, { text: "do-while", isCorrect: false }] },
      { question: "How do you define a method in Java?", options: [{ text: "methodName()", isCorrect: true }, { text: "def method()", isCorrect: false }] },
      { question: "Which package is automatically imported in every Java program?", options: [{ text: "java.lang", isCorrect: true }, { text: "java.util", isCorrect: false }] },
      { question: "How do you create an object in Java?", options: [{ text: "new", isCorrect: true }, { text: "create", isCorrect: false }] },
      { question: "What is the default value of an int variable?", options: [{ text: "0", isCorrect: true }, { text: "null", isCorrect: false }] },
      { question: "Which keyword is used to inherit a class?", options: [{ text: "extends", isCorrect: true }, { text: "implements", isCorrect: false }] }
    ],
    medium: [
      { question: "What is method overloading?", options: [{ text: "Methods with same name, different parameters", isCorrect: true }, { text: "Methods in different classes", isCorrect: false }] },
      { question: "What is encapsulation?", options: [{ text: "Hiding implementation details", isCorrect: true }, { text: "Creating interfaces", isCorrect: false }] },
      { question: "What is the purpose of the 'super' keyword?", options: [{ text: "Refer to parent class", isCorrect: true }, { text: "Refer to child class", isCorrect: false }] },
      { question: "What does the 'static' keyword do?", options: [{ text: "Declares a shared class member", isCorrect: true }, { text: "Creates an object", isCorrect: false }] },
      { question: "How do you handle exceptions in Java?", options: [{ text: "try-catch", isCorrect: true }, { text: "if-else", isCorrect: false }] },
      { question: "What is the difference between ArrayList and LinkedList?", options: [{ text: "ArrayList uses an array, LinkedList uses nodes", isCorrect: true }, { text: "Both are the same", isCorrect: false }] },
      { question: "What is polymorphism?", options: [{ text: "One interface, multiple implementations", isCorrect: true }, { text: "Only method overriding", isCorrect: false }] },
      { question: "What is an abstract class?", options: [{ text: "A class that cannot be instantiated", isCorrect: true }, { text: "A class without methods", isCorrect: false }] },
      { question: "What is the difference between HashMap and HashSet?", options: [{ text: "HashMap stores key-value pairs, HashSet stores only keys", isCorrect: true }, { text: "Both are identical", isCorrect: false }] },
      { question: "What is a constructor?", options: [{ text: "A method to initialize objects", isCorrect: true }, { text: "A method to destroy objects", isCorrect: false }] }
    ],
    hard: [
      { question: "What is reflection in Java?", options: [{ text: "Inspecting classes and methods at runtime", isCorrect: true }, { text: "A type of loop", isCorrect: false }] },
      { question: "What is the use of the volatile keyword?", options: [{ text: "Ensures visibility of changes across threads", isCorrect: true }, { text: "Defines constants", isCorrect: false }] },
      { question: "What is the difference between deep copy and shallow copy?", options: [{ text: "Deep copy duplicates objects, shallow copy shares references", isCorrect: true }, { text: "They are the same", isCorrect: false }] },
      { question: "What is the use of transient variables?", options: [{ text: "Excluded from serialization", isCorrect: true }, { text: "Cannot be modified", isCorrect: false }] },
      { question: "What is the purpose of the finalize() method?", options: [{ text: "Cleanup before garbage collection", isCorrect: true }, { text: "Starts a new thread", isCorrect: false }] },
      { question: "What is a daemon thread?", options: [{ text: "Background thread that ends with main thread", isCorrect: true }, { text: "A high-priority thread", isCorrect: false }] },
      { question: "What is method reference in Java?", options: [{ text: "Shortcut for lambda expressions", isCorrect: true }, { text: "A way to call methods", isCorrect: false }] },
      { question: "What is the difference between fail-fast and fail-safe iterators?", options: [{ text: "Fail-fast throws error on modification, fail-safe does not", isCorrect: true }, { text: "Both behave the same", isCorrect: false }] },
      { question: "What is the purpose of the strictfp keyword?", options: [{ text: "Ensures floating-point consistency", isCorrect: true }, { text: "Declares an immutable variable", isCorrect: false }] },
      { question: "What is the difference between Runnable and Callable?", options: [{ text: "Callable returns results, Runnable does not", isCorrect: true }, { text: "Both are identical", isCorrect: false }] }
    ]
  },
  cpp:{
     easy:[
      { question: "What is C++ primarily used for?", options: [{ text: "System programming", isCorrect: true }, { text: "Web development", isCorrect: false }] },
      { question: "Which symbol is used for comments in C++?", options: [{ text: "//", isCorrect: true }, { text: "#", isCorrect: false }] },
      { question: "Which keyword is used to define a class in C++?", options: [{ text: "class", isCorrect: true }, { text: "struct", isCorrect: false }] },
      { question: "What is the default value of an int variable?", options: [{ text: "0", isCorrect: true }, { text: "null", isCorrect: false }] },
      { question: "Which operator is used to access a pointer's value?", options: [{ text: "*", isCorrect: true }, { text: "&", isCorrect: false }] },
      { question: "Which library is used for input and output operations?", options: [{ text: "iostream", isCorrect: true }, { text: "stdio.h", isCorrect: false }] },
      { question: "What is the extension of a C++ source file?", options: [{ text: ".cpp", isCorrect: true }, { text: ".cxx", isCorrect: false }] },
      { question: "Which loop is used for iteration?", options: [{ text: "for", isCorrect: true }, { text: "switch", isCorrect: false }] },
      { question: "How do you define a function in C++?", options: [{ text: "returnType functionName()", isCorrect: true }, { text: "function functionName()", isCorrect: false }] },
      { question: "What is the purpose of the return statement?", options: [{ text: "Returns a value from a function", isCorrect: true }, { text: "Declares a function", isCorrect: false }] }
     ],
     medium:[
      { question: "What is function overloading?", options: [{ text: "Functions with same name, different parameters", isCorrect: true }, { text: "Functions in different classes", isCorrect: false }] },
      { question: "What is encapsulation?", options: [{ text: "Hiding implementation details", isCorrect: true }, { text: "Creating interfaces", isCorrect: false }] },
      { question: "What is the purpose of the 'this' pointer?", options: [{ text: "Refers to current object", isCorrect: true }, { text: "Refers to parent object", isCorrect: false }] },
      { question: "What does the 'static' keyword do?", options: [{ text: "Declares a shared class member", isCorrect: true }, { text: "Creates an object", isCorrect: false }] },
      { question: "How do you handle exceptions in C++?", options: [{ text: "try-catch", isCorrect: true }, { text: "if-else", isCorrect: false }] },
      { question: "What is the difference between vector and array?", options: [{ text: "Vector is dynamic, array is fixed", isCorrect: true }, { text: "Both are the same", isCorrect: false }] },
      { question: "What is polymorphism?", options: [{ text: "One interface, multiple implementations", isCorrect: true }, { text: "Only method overriding", isCorrect: false }] },
      { question: "What is an abstract class?", options: [{ text: "A class that cannot be instantiated", isCorrect: true }, { text: "A class without methods", isCorrect: false }] },
      { question: "What is the difference between map and unordered_map?", options: [{ text: "map is sorted, unordered_map is not", isCorrect: true }, { text: "Both behave the same", isCorrect: false }] },
      { question: "What is a constructor?", options: [{ text: "A method to initialize objects", isCorrect: true }, { text: "A method to destroy objects", isCorrect: false }] }
     ],
     hard:[
      { question: "What is RAII in C++?", options: [{ text: "Resource Acquisition Is Initialization", isCorrect: true }, { text: "Runtime Access and Interface", isCorrect: false }] },
      { question: "What is the use of the volatile keyword?", options: [{ text: "Prevents compiler optimizations", isCorrect: true }, { text: "Defines constants", isCorrect: false }] },
      { question: "What is the difference between deep copy and shallow copy?", options: [{ text: "Deep copy duplicates objects, shallow copy shares references", isCorrect: true }, { text: "They are the same", isCorrect: false }] },
      { question: "What is a smart pointer?", options: [{ text: "Pointer that manages memory automatically", isCorrect: true }, { text: "A pointer with additional features", isCorrect: false }] },
      { question: "What is the purpose of the move constructor?", options: [{ text: "Transfers ownership of resources", isCorrect: true }, { text: "Copies an object", isCorrect: false }] },
      { question: "What is a lambda function in C++?", options: [{ text: "Anonymous function defined inline", isCorrect: true }, { text: "A function without parameters", isCorrect: false }] },
      { question: "What is a mutex used for?", options: [{ text: "Synchronizing threads", isCorrect: true }, { text: "Memory allocation", isCorrect: false }] },
      { question: "What is the difference between new and malloc?", options: [{ text: "new calls constructor, malloc does not", isCorrect: true }, { text: "Both behave the same", isCorrect: false }] },
      { question: "What is template metaprogramming?", options: [{ text: "Compile-time computation with templates", isCorrect: true }, { text: "A runtime optimization technique", isCorrect: false }] },
      { question: "What is the purpose of the noexcept specifier?", options: [{ text: "Indicates function does not throw exceptions", isCorrect: true }, { text: "Ensures exceptions are caught", isCorrect: false }] }
     ]
  },
  go:{
    easy:[{ question: "What is Go primarily used for?", options: [{ text: "Concurrent programming", isCorrect: true }, { text: "Mobile apps", isCorrect: false }] },
    { question: "Which keyword is used to define a function in Go?", options: [{ text: "func", isCorrect: true }, { text: "define", isCorrect: false }] },
    { question: "What is the default visibility of variables in Go?", options: [{ text: "Package level", isCorrect: true }, { text: "Global", isCorrect: false }] },
    { question: "Which package is used for formatted I/O in Go?", options: [{ text: "fmt", isCorrect: true }, { text: "io", isCorrect: false }] },
    { question: "Which symbol is used for single-line comments in Go?", options: [{ text: "//", isCorrect: true }, { text: "#", isCorrect: false }] },
    { question: "What is the default value of an int variable in Go?", options: [{ text: "0", isCorrect: true }, { text: "null", isCorrect: false }] },
    { question: "How do you declare a constant in Go?", options: [{ text: "const", isCorrect: true }, { text: "final", isCorrect: false }] },
    { question: "Which keyword is used to import a package in Go?", options: [{ text: "import", isCorrect: true }, { text: "include", isCorrect: false }] },
    { question: "What is the purpose of the defer statement?", options: [{ text: "Delays function execution", isCorrect: true }, { text: "Defines a function", isCorrect: false }] },
    { question: "How do you declare a slice in Go?", options: [{ text: "Using []", isCorrect: true }, { text: "Using {}", isCorrect: false }] }],
    medium:[
      { question: "What is a goroutine in Go?", options: [{ text: "A lightweight thread", isCorrect: true }, { text: "A type of function", isCorrect: false }] },
      { question: "How do you create a new goroutine?", options: [{ text: "Using the go keyword", isCorrect: true }, { text: "Using new keyword", isCorrect: false }] },
      { question: "What is a channel in Go?", options: [{ text: "A way to communicate between goroutines", isCorrect: true }, { text: "A data type", isCorrect: false }] },
      { question: "Which built-in function closes a channel?", options: [{ text: "close", isCorrect: true }, { text: "end", isCorrect: false }] },
      { question: "How do you define an anonymous function in Go?", options: [{ text: "Using func without a name", isCorrect: true }, { text: "Using function keyword", isCorrect: false }] },
      { question: "Which function retrieves the length of a slice?", options: [{ text: "len", isCorrect: true }, { text: "size", isCorrect: false }] },
      { question: "How do you declare a map in Go?", options: [{ text: "Using map[keyType]valueType", isCorrect: true }, { text: "Using dict", isCorrect: false }] },
      { question: "What is the zero value of a string in Go?", options: [{ text: "An empty string", isCorrect: true }, { text: "nil", isCorrect: false }] },
      { question: "Which statement is used to terminate a loop?", options: [{ text: "break", isCorrect: true }, { text: "exit", isCorrect: false }] },
      { question: "How do you create a struct in Go?", options: [{ text: "Using type keyword", isCorrect: true }, { text: "Using struct keyword only", isCorrect: false }] }
    ],
    hard:[
      { question: "What does the select statement do in Go?", options: [{ text: "Handles multiple channel operations", isCorrect: true }, { text: "Declares a variable", isCorrect: false }] },
      { question: "What is the purpose of the sync.Mutex type?", options: [{ text: "Provides mutual exclusion", isCorrect: true }, { text: "Synchronizes clocks", isCorrect: false }] },
      { question: "Which package provides atomic operations in Go?", options: [{ text: "sync/atomic", isCorrect: true }, { text: "math/atomic", isCorrect: false }] },
      { question: "What is the difference between buffered and unbuffered channels?", options: [{ text: "Buffered channels store data, unbuffered channels don't", isCorrect: true }, { text: "Unbuffered channels store data, buffered channels don't", isCorrect: false }] },
      { question: "How do you handle panic in Go?", options: [{ text: "Using recover", isCorrect: true }, { text: "Using catch", isCorrect: false }] },
      { question: "What is an interface in Go?", options: [{ text: "A collection of method signatures", isCorrect: true }, { text: "A type of variable", isCorrect: false }] },
      { question: "What does the reflect package provide?", options: [{ text: "Runtime reflection capabilities", isCorrect: true }, { text: "Memory management tools", isCorrect: false }] },
      { question: "How do you perform dependency injection in Go?", options: [{ text: "Using constructor functions", isCorrect: true }, { text: "Using import statements", isCorrect: false }] },
      { question: "What does defer do in Go?", options: [{ text: "Executes a function at the end of its surrounding function", isCorrect: true }, { text: "Executes a function immediately", isCorrect: false }] },
      { question: "How do you implement polymorphism in Go?", options: [{ text: "Using interfaces", isCorrect: true }, { text: "Using inheritance", isCorrect: false }] }
    
    ]
  }


};

export default questionsData;
