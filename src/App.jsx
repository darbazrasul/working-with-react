// This is a React Component
// function Hello() {
//   return (
//     <div>
//       <h1>Hello, Darbaz!</h1>
//       <p>Welcome to React</p>
//     </div>
//   );
// }
//==================================================================================================
// export default Hello;
// import { exp } from "three/tsl";
// function Hello(){
//   return(
//     <> 
//       <h1>
//         Hello, Darbaz
//       </h1>
//       <p>
//         Welcome to React
//       </p>
//       <img src="https://via.placeholder.com/150">
//       </img>
//     </>
//   )
// }
//=================================================================================================
// Correct — one root element
// function Hello() {
//   return (
//     <div>
//       <h1>Title</h1>
//       <p>Paragraph</p>
//     </div>
//   );
// }

// Also correct — using Fragment (no extra div)
// function Hello() {
//   return (
//     <>
//       <h1>Title</h1>
//       <p>Paragraph</p>
//     </>
//   );
// }

// Wrong — two root elements
//function Hello() {
//   return (
//     <h1>Title</h1>
//     <p>Paragraph</p>
//   );
// }

// export default Hello
//==================================================================================================

// tow components in one

// function Header() {
//   return <h1>My Website</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Header />       
//       <p>Welcome!</p>
//     </div>
//   );
// }

// export default App

// ==================================================================================================

// In HTML you write:       class="box"
// In JSX you write:        className="box"

// In HTML you write:       for="name"
// In JSX you write:        htmlFor="name"

// Self-closing tags must have /
// HTML:   <input>  <br>  <img>
// JSX:    <input />  <br />  <img />

// function MyComponent() {
//   const name = "Darbaz";
//   const age = 25;

//   return (
//     <div className="box">
//       {/* This is a comment in JSX */}

//       {/* Use {} to write JavaScript inside JSX */}
//       <h1>My name is {name}</h1>
//       <p>I am {age} years old</p>
//       <p>Next year I will be {age + 1}</p>
//       <p>Uppercase: {name.toUpperCase()}</p>
//     </div>
//   );
// }

//=================================================================================

// import { useState } from 'react';

// function Counter() {
//   // useState(0) means initial value is 0
//   // count = current value
//   // setCount = function to update the value
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// export default Counter

//=================================================================================


// function NameInput() {
//   const [name, setName] = useState('');

//   return (
//     <div>
//       <input 
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Type your name"
//       />
//       <p>Hello, {name}!</p>
//     </div>
//   );
// }
// export default NameInput

// import { useState } from 'react';


// function TodoList() {
//   const [todos, setTodos] = useState(['Buy groceries', 'Learn React']);
//   const [input, setInput] = useState('');

//   const addTodo = () => {
//     if (input.trim() === '') return;
//     setTodos([...todos, input]); 
//     setInput('');
//   };

//   const removeTodo = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <input 
//         value={input} 
//         onChange={(e) => setInput(e.target.value)} 
//         placeholder="New todo"
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => removeTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList
 

// import { useState } from 'react';
// function App() {
//   const [showMessage, setShowMessage] = useState(false);

//   return (
//     <div>
//       {showMessage && <p>This message is visible!</p>}
//       <button onClick={() => setShowMessage(!showMessage)}>Toggle</button>
//     </div>
//   );
// }

// export default App


// function CarList() {
//   const cars = [
//     { id: 1, brand: 'Toyota', price: 25000 },
//     { id: 2, brand: 'BMW', price: 45000 },
//     { id: 3, brand: 'Mercedes', price: 55000 },
//   ];

//   return (
//     <div>
//       <h2>Cars for Sale</h2>
//       {cars.map((car) => (
//         // key is required — must be unique — like a list item identifier
//         <div key={car.id}>
//           <h3>{car.brand}</h3>
//           <p>Price: ${car.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// Car item component
// function CarCard({ brand, price }) {
//   return (
//     <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
//       <h3>{brand}</h3>
//       <p>Price: ${price.toLocaleString()}</p>
//     </div>
//   );
// }

// // List component
// function CarList() {
//   const cars = [
//     { id: 1, brand: 'Toyota', price: 25000 },
//     { id: 2, brand: 'BMW', price: 45000 },
//     { id: 3, brand: 'Mercedes', price: 55000 },
//   ];

//   return (
//     <div>
//       {cars.map((car) => (
//         <CarCard key={car.id} brand={car.brand} price={car.price} />
//       ))}
//     </div>
//   );
// }

///================================================================================================
// function Events() {
  
//   // Button click
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   // Input change
//   const handleChange = (e) => {
//     console.log(e.target.value); // current input value
//   };

//   // Form submit
//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page reload (important!)
//     console.log('Form submitted');
//   };

//   // Mouse events
//   const handleMouseEnter = () => console.log('Mouse entered!');

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>

//       <input onChange={handleChange} placeholder="Type something" />

//       <form onSubmit={handleSubmit}>
//         <button type="submit">Submit Form</button>
//       </form>

//       <div onMouseEnter={handleMouseEnter} style={{ padding: '20px', background: '#eee' }}>
//         Hover over me
//       </div>
//     </div>
//   );
// }
//================================================================================
// export default Events

// import { useState, useEffect } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     // This code runs AFTER the component renders
//     const interval = setInterval(() => {
//       setSeconds(prev => prev + 1);
//     }, 1000);

//     // Cleanup function — runs when component unmounts (like dispose())
//     return () => {
//       clearInterval(interval);
//     };

//   }, []); // [] = run only once when component mounts (like initState)

//   return <h1>Timer: {seconds}s</h1>;
// }

// export default Timer

//================================================================================================

//================================================================================================
// import { useState } from 'react';

// function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value  // dynamic key update
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email.includes('@')) {
//       newErrors.email = 'Invalid email address';
//     }
//     if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setIsSubmitting(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setIsSubmitting(false);
//     alert('Login successful!');
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
//       <h2>Login</h2>

//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           style={{ display: 'block', width: '100%', padding: '8px' }}
//         />
//         {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//       </div>

//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           style={{ display: 'block', width: '100%', padding: '8px' }}
//         />
//         {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//       </div>

//       <button type="submit" disabled={isSubmitting}>
//         {isSubmitting ? 'Logging in...' : 'Login'}
//       </button>
//     </form>
//   );
// }

// export default LoginForm


//===============================================================================================

// import { useRef } from 'react';///// This is a "DOM Ref" equivalent (FocusNode, Controller, etc.)
// import { useState } from 'react';
// import { useEffect } from 'react';

// function FocusInput() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus(); // directly access the DOM element
//   };

//   return (
//     <div>
//       <input ref={inputRef} placeholder="Click the button to focus me" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }




//===============================================================================================
// import { useRef } from 'react';///// This is a "DOM Ref" equivalent (FocusNode, Controller, etc.)
// import { useState } from 'react';
// import { useEffect } from 'react';


// function PreviousValue() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(0);

//   useEffect(() => {
//     prevCount.current = count; // update ref after render
//   });

//   return (
//     <div>
//       <p>Current: {count}</p>
//       <p>Previous: {prevCount.current}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default PreviousValue

//===============================================================================================

// import { createContext, useContext, useState } from 'react';

// // 1. Create the context
// const ThemeContext = createContext();

// // 2. Create a Provider component
// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // 3. Custom hook to use context easily
// function useTheme() {
//   return useContext(ThemeContext);
// }

// // 4. Use in any component — no matter how deep
// function Header() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <header style={{ 
//       background: theme === 'dark' ? '#333' : '#fff',
//       color: theme === 'dark' ? '#fff' : '#000',
//       padding: '20px'
//     }}>
//       <h1>My App</h1>
//       <button onClick={toggleTheme}>
//         Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//       </button>
//     </header>
//   );
// }

// function DeepNestedComponent() {
//   const { theme } = useTheme();
//   return <p>Current theme: {theme}</p>;
// }

// // 5. Wrap your app with the provider
// function App() {
//   return (
//     <ThemeProvider>
//       <Header />
//       <DeepNestedComponent />
//     </ThemeProvider>
//   );
// }

///==============================================================================================
// export default App


// import { useState, useEffect } from 'react';


// // Custom hook for API fetching — reusable

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
    
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [url]);

//   return { data, loading, error };
// }

// // Now use it anywhere!
// function UserList() {
//   const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

//   if (loading) return <p>Loading users...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// function PostList() {
//   // Reuse the same hook with different URL!
//   const { data: posts, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

//   if (loading) return <p>Loading posts...</p>;

//   return (
//     <ul>
//       {posts?.map(post => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }


// function App() {
//   return (
//     <div>
//       <UserList />
//       <PostList />
//     </div>
//   );
// }

// export default App

//=================================================================================================
//navigation
//npm install react-router-dom

// import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

// // Pages
// function Home() {
//   return <h1>🏠 Home Page</h1>;
// }

// function About() {
//   return <h1>ℹ️ About Page</h1>;
// }

// function UserProfile() {
//   const { id } = useParams(); // get URL parameter
//   return <h1>👤 User Profile #{id}</h1>;
// }

// function NotFound() {
//   return <h1>404 - Page Not Found</h1>;
// }

// // Navigation component
// function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <nav>
//       <Link to="/">Home</Link>  {' | '}
//       <Link to="/about">About</Link>  {' | '}
//       <button onClick={() => navigate('/user/1')}>Go to User 1</button>
//     </nav>
//   );
// }

// // App with routing
// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/user/:id" element={<UserProfile />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//==================================================================================================
// button with css style

// import styles from './Button.module.css';

// function Button({ text }) {
//   return <button className={styles.button}>{text}</button>;
// }

// export default Button


//==================================================================================================
// tilwind css
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
// npm install @tailwindcss/vite
//npm install styled-components

// No CSS files — write styles directly in JSX

///================================================================================================

// import styled from 'styled-components';

// const Button = styled.button`
//   background: blue;
//   color: white;
//   padding: 10px 20px;
//   border-radius: 5px;
  
//   &:hover {
//     background: darkblue;
//   }
// `;

// function App() {
//   return <Button>Click Me</Button>;
// }

// export default App

//================================================================================================
// npm install axios

// import axios from 'axios';
// import { useState, useEffect } from 'react';

// // Create an axios instance with base config
// const api = axios.create({
//   baseURL: 'https://your-api.com/api',
//   headers: {
//     'Authorization': `Bearer ${localStorage.getItem('token')}`,
//     'Content-Type': 'application/json',
//   }
// });

// function CarList() {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await api.get('/cars');
//         setCars(response.data.data);
//       } catch (error) {
//         console.error('Error fetching cars:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   const addCar = async (carData) => {
//     try {
//       const response = await api.post('/cars', carData);
//       setCars(prev => [...prev, response.data]);
//     } catch (error) {
//       console.error('Error adding car:', error);
//     }
//   };

//   const deleteCar = async (id) => {
//     try {
//       await api.delete(`/cars/${id}`);
//       setCars(prev => prev.filter(car => car.id !== id));
//     } catch (error) {
//       console.error('Error deleting car:', error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {cars.map(car => (
//         <div key={car.id}>
//           <h3>{car.brand}</h3>
//           <button onClick={() => deleteCar(car.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

//================================================================================================

//  import { useState, useMemo, useCallback } from 'react';

// function ExpensiveCalculation({ numbers }) {
  
//   // useMemo: only recalculates when 'numbers' changes
//   // Like caching — don't recalculate on every render
//   const total = useMemo(() => {
//     console.log('Calculating total...');
//     return numbers.reduce((sum, num) => sum + num, 0);
//   }, [numbers]);

//   // useCallback: only recreates function when dependencies change
//   // Useful when passing functions to child components
//   const handleClick = useCallback(() => {
//     console.log('Total is:', total);
//   }, [total]);

//   return (
//     <div>
//       <p>Total: {total}</p>
//       <button onClick={handleClick}>Log Total</button>
//     </div>
//   );
// }

// function App() {
//   const [numbers, setNumbers] = useState([1, 2, 3]);

//   return (
//     <div>
//       <ExpensiveCalculation numbers={numbers} />
//       <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>Add Number</button>
//     </div>
//   );
// }

// export default App


//================================================================================================

// function Button({ text }) {
//   return (
//     <button className="bg-red-500 hover:bg-red-700 text-yellow-600 font-bold py-2 px-4 rounded">
//       {text}
//     </button>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Button text="Click me" />
//     </div>
//   );
// }

// export default App

//================================================================================================


// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// // ✅ Move outside — defined once, not recreated on every render
// const fetchUser = async () => {
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/users/`
//   );
//   return data;
// };

// function UserProfile({ userId }) {
//   const {
//     data: user,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ['user', userId],
//     queryFn: () => fetchUser(userId),
//     staleTime: 1000 * 60 * 5,
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p style={{ color: 'red' }}>{error.message || 'Failed to load user'}</p>;
//   if (!user) return null;

//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <p>Email: {user.email}</p>
//       <p>City: {user.address?.city}</p>
//     </div>
//   );
// }

// export default UserProfile;


// ================================================================================================

// components/UserList.jsx
// import { useQuery } from '@tanstack/react-query';
// import { getUsers } from '../api/api';

// function UserList({ onSelectUser }) {
//   const { data: users, isLoading, isError, error } = useQuery({
//     queryKey: ['users'],
//     queryFn: getUsers,
//   });

//   if (isLoading) return <p>⏳ Loading users...</p>;
//   if (isError)   return <p style={{ color: 'red' }}> {error.message}</p>;

//   return (
//     <ul style={{ listStyle: 'none', padding: 0 }}>
//       {users.map(user => (
//         <li
//           key={user.id}
//           onClick={() => onSelectUser(user.id)}
//           style={{
//             padding: '12px',
//             margin: '8px 0',
//             background: '#f0f0f0',
//             borderRadius: '8px',
//             cursor: 'pointer',
//           }}
//         >
//           <strong>{user.name}</strong>
//           <p style={{ margin: 0, color: '#666' }}>{user.email}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default UserList;
