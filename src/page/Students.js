import React ,{useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useStudent} from '../context/StudentContext ';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LeftPage from '../components/LeftPage';

const Students = () => {
const  {students,handleSubmit,selectedStudent,handleAddNewStudent,handleEditStudent,handleCloseForm,showForm,handleDeleteStudent, skip,setLimit,setSkip,total ,successMessage  } =useStudent();
const { searchQuery, setSearchQuery } = useStudent();

//Limit değeri apide 30 belirtildiği için mevcut sayfada max 30 kayıt gösteriecek şekilde ayarlandı 
const rowsPerPageOptions = [6, 12, 24, 30]; 
//sayfada gösterilen kayıt sayısı.Default 6 çünkü örnek Figma örneğinde default 6 kayıt gösterilmiştir
 const [rowsPerPage, setRowsPerPage] = useState(6)  

const handleNextPage = () => {
  //next page
  setSkip(skip + rowsPerPage);
};

const handlePreviousPage = () => {
  //prev page
  setSkip(Math.max(skip - rowsPerPage, 0));
};

const handleRowsPerPageChange = (event) => {
  //dropdownda her select durumunda
  const newRowsPerPage = Number(event.target.value);
  setRowsPerPage(newRowsPerPage);
  setLimit(newRowsPerPage);
};

const handleSearch = (event) => {
//search 
  setSearchQuery(event.target.value);
};

const validationSchema = Yup.object({
  //Validation durumları
  firstName: Yup.string().required('First Name is a required field'),
  lastName: Yup.string().required('Last Name is a required field'),
  email: Yup.string().email('Enter a valid email address').required('Email is a required field'),
  phone: Yup.string().required('Phone is a required field'),
  domain: Yup.string().required('Website is a required field'),
});


  return (
    <div className="flex"    >
    {showForm && (
   <div className="overlay  fixed top-0 left-0 w-full   h-full bg-black bg-opacity-60 z-50"> 
       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">



       <div className="flex justify-end">
            <button
              onClick={handleCloseForm}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-6">{selectedStudent ? 'Edit Student' : 'Add New Student'}</h2>
          
          <Formik
  initialValues={{
    firstName: selectedStudent?.firstName || '',
    lastName: selectedStudent?.lastName || '',
    email: selectedStudent?.email || '',
    phone: selectedStudent?.phone || '',
    domain: selectedStudent?.domain || '',
    company: { name: selectedStudent?.company?.name || '' }

}}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>

        <Form>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                  First Name:
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name:
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                <ErrorMessage name="email" component="div"  className="text-red-500 text-sm"
                /> 
              </div>


              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  Phone:
                </label>
                <Field
                  type="phone"
                  id="phone"
                  name="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>


              <div className="mb-4">
                <label htmlFor="domain" className="block text-gray-700 text-sm font-bold mb-2">
                Website:
                </label>
                <Field
                  type="text"
                  id="domain"
                  name="domain"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                <ErrorMessage name="domain" component="div" className="text-red-500 text-sm" />
              </div>


<div className="mb-4">
  <label htmlFor="company_name" className="block text-gray-700 text-sm font-bold mb-2">
    Company Name:
  </label>
  <Field
    type="text"
    id="company_name"
    name="company.name"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
  <ErrorMessage name="company.name" component="div" className="text-red-500 text-sm" />
</div>



 
     <button type="submit" className="bg-yellow-500 rounded-md py-2 px-4 text-black">Kaydet</button>

     {successMessage && (
        <div className=" text-red-500 mt-3 success-message">{successMessage}</div>
      )}
            </Form>
          </Formik>

  </div>
  </div>


)}



  <LeftPage/>



  <div
  className={`flex-1 flex-col p-4 bg-white ${showForm ? 'relative' : ''}`}
  style={{
    background: '#f8f8f8',
  }}
>

    <div className="flex-grow relative justify-center items-center   mb-28  "    style={{
      background: '#f8f8f8',
    }}
>

    <div className="absolute w-full  flex justify-between  items-center px-4"    >
      <div className='flex items-center'>  
      <img         
        src="img/left.png"
        alt="Sol Logo"
        className="w-5 h-5 mr-3"
      />
       </div>
      <img
        src="img/right.png"
        alt="Sağ Logo"
        className="w-5 h-5"
      />
    </div>

  
<div className=" absolute w-full justify-between  flex items-center my-10  "
    style={{
      background: '#f8f8f8;',
  
    }}
>

      <h2 className='text-2xl font-bold'> Students List</h2>

    <div className='flex gap-4'>
  <div className=' flex relative'>
     <input
        type="text"
        className="border border-gray-300 rounded-md py-2 px-3 mr-2"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
    <FaSearch className="text-gray-500  transform -translate-y-1/2  top-1/2 right-3 absolute" />
  </div>  
    <button  onClick={handleAddNewStudent}   className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      style={{
        background: '#ffc82c',
      }} >
    ADD NEW STUDENT
      </button>
      </div>
 </div>


</div>

<div className=""   style={{
      background: '##f8f8f8',
    }}>
 <table className="min-w-full   border-t text-left  ml-4  border-gray-300"
style={{     borderCollapse: 'separate', borderSpacing: '0 10px' }}>
  <thead>
    <tr>
      <th className="py-2 px-4">ID</th>
      <th className="py-2 px-4"></th>
      <th className="py-2 px-4">Name</th>
      <th className="py-2 px-4">Email</th>
      <th className="py-2 px-4">Phone</th>
      <th className="py-2 px-4">Website</th>
      <th className="py-2 px-4">Company Name</th>
    </tr>
  </thead>
  <tbody>
    

  {students.map((student) => (
      <tr key={student.id} className="bg-white rounded-lg">
         <td className="py-2 px-4">{student.id} </td>
        <td className="py-2 px-4">
          <img src={student.image} alt="Fotoğraf" className="w-8 h-8 rounded-full" style={{ width: '65px', height: '55px', top: '201px', left: '313px' }} />
        </td>
       
        <td className="py-2 px-4">{student.firstName} {student.lastName}</td>
        <td className="py-2 px-4">{student.email}</td>
       <td className="py-2 px-4">
        <div 
        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' 
        }}
        >
        {student.phone}</div>
        </td>
        <td className="py-2 px-4">{student.domain}</td>
        <td className="py-2 px-4">{student.company.name}</td>
        <td className="py-2 px-4">
        <button onClick={() => handleEditStudent(student)}  className="text-white font-bold py-2 px-4 rounded mr-2">
            <img src="img/edit.png" alt="Edit" className="w-4 h-4" /> 
          </button>
          <button   onClick={() => handleDeleteStudent(student.id)}     className="text-white font-bold py-2 px-4 rounded">
            <img src="img/delete.png" alt="Delete" className="w-4 h-4" /> 
          </button>
        </td>
      </tr>
    ))}
 
 </tbody>
</table>
 
<div className="flex gap-6 items-center justify-end  mt-4">
  <div className= " flex items-end  gap-2 text-sm text-gray-700">
 Rows per page:
<select value={rowsPerPage} onChange={handleRowsPerPageChange}>
  {rowsPerPageOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

  </div>

  <div className="flex items-center">
    <div className="text-sm text-gray-700 mr-2">
    1-{rowsPerPage} of {total}
    </div>
    <div className="flex">
     <button  onClick={handlePreviousPage}   disabled={skip === 0}   className=" hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
        &lt;
      </button>
      <button  onClick={handleNextPage}  disabled={skip + rowsPerPage >= total}   className=" hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
        &gt;
      </button> 
    </div>
  </div>
</div>
  </div>
  </div>






  
</div>
  );
};

export default Students;
