// import React, { useEffect, useState } from 'react';

// const LoaderPage = () => {
//   const [showPage, setShowPage] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPage(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div style={{ margin: 0, backgroundImage: "url('https://img.freepik.com/free-photo/road-inside-parking_1203-433.jpg?w=996&t=st=1648395488~exp=1648396088~hmac=f7732bb5e42d7a9f2dd85e5427f0be96d85b6d6ba9efb072b675755bb2328254')", backgroundRepeat: "repeat", backgroundSize: "cover" }}>
//       <div id="loader" style={{ position: "absolute", left: "50%", top: "50%", zIndex: 1, width: 120, height: 120, margin: "-76px 0 0 -76px", border: "16px solid #f3f3f3", borderRadius: "50%", borderTop: "16px solid blue", borderRight: "16px solid green", borderBottom: "16px solid red", WebkitAnimation: "spin 0.5s linear infinite", animation: "spin 0.5s linear infinite" }}></div>

//       {showPage && (
//         <div id="myDiv" className="animate-bottom" style={{ display: "block" }}>
//           <h2 className="mt-5">Select Login Type</h2>
//           <div className="container" style={{ paddingLeft: 85 }}>
//             <div className="row">
//               <div className="card m-5 p-3 border-secondary" style={{ width: "15rem", border: "5px solid", borderStyle: "outset" }}>
//                 <div className="fa fa-user card-img-top" style={{ fontSize: 80 }}></div>
//                 <div className="card-body">
//                   <h5 className="card-title">User</h5>
//                   <a href="user site/Home.html" type="button" className="btn btn-warning abcd">Home</a>
//                 </div>
//               </div>
//               <div className="card m-5 p-3 border-secondary" style={{ width: "15rem", border: "5px solid", borderStyle: "outset" }}>
//                 <div className="fa fa-user card-img-top" style={{ fontSize: 80 }}></div>
//                 <div className="card-body">
//                   <h5 className="card-title">Focal Person</h5>
//                   <a href="TECHSTEP/Login.html" type="button" className="btn btn-warning abcd">Home</a>
//                 </div>
//               </div>
//               <div className="card m-5 p-3 border-secondary" style={{ width: "15rem", border: "5px solid", borderStyle: "outset" }}>
//                 <div className="fa fa-user card-img-top" style={{ fontSize: 80 }}></div>
//                 <div className="card-body">
//                   <h5 className="card-title">Admin</h5>
//                   <a href="university/admin login.html" type="button" className="btn btn-warning abcd">Home</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
//     </div>
//   );
// };

// export default LoaderPage;
