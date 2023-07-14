import React, { createContext, useState, useContext, useEffect } from "react";

const StudentContext = createContext();


export const StudentProvider = ({ children }) => {
  //öğrenciler(toplam100 kayıt)
  const [students, setStudents] = useState([]);
  //apiden response durumlarının olduğunu anlamak için
  const [loading, setLoading] = useState(true);

  //search queryi tutar
  const [searchQuery, setSearchQuery] = useState("");

  //edit yapılacak öğrenci bilgisini tutar
  const [selectedStudent, setSelectedStudent] = useState([]); 

  //formu hem yeni öğrenci ekleme hem de mevcut öğrencide edit butonunda çağırığımız için tutuldu
  const isNewStudent = !selectedStudent;

  //formun gösterilme durumu
  const [showForm, setShowForm] = useState(false);

  //başlangıçta 6 kayıt 
  const [limit ,setLimit ]=useState(6);

  //skip değeri başlangıçta 0.Atlanılacak kayıt sayısı
  const [skip,setSkip]=useState(0);

  //total değeri apiden çekilen toplam kayıt sayısı
  const  [total,setTotal] =useState();


  const [successMessage, setSuccessMessage] = useState('');


  //form alanında post işlem sonrası formun ınputlarını temizlemek için
  const initialValues={
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    domain:  '',
    company: { name: '' }
  }



  useEffect(() => {

 //toplam 100 kayıt içerisinde sayfanın render olma  durumu, öğrenci listesinde search işleminde(apiden gelen response durumu biraz zaman aşımına uğruyor) 
 //,bir sonraki veya önceki sayfaya yönlendirilme durumlarında  ,mevcut sayfada gösterilecek kayıt sayısı değişikliğinde çağırılıyor
    setLoading(true);
    const fetchStudents = async () => {
      try {
    //  const response = await fetch(`https://dummyjson.com/users/search?q=${searchQuery}&limit=${limit}`);
       const response = await fetch(`https://dummyjson.com/users/search?q=${searchQuery}&limit=${limit}&skip=${skip}`);
        const data = await response.json();
        setStudents(data.users);
        setLimit(data.limit);
        setSkip(data.skip);
        setTotal(data.total);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchStudents();
  }, [searchQuery,limit,skip]);

    
const postStudentData = async (values) => {
//öğrenci  ekleme(post)
  setLoading(true);
  try {
  const response = await fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(values),
  });
  const data = await response.json();
  console.log('İstek başarılı:', data);
  //mevcut öğrenci listesine yenisi ekleniyor
  setStudents((students) => [...students, data]);
  setSuccessMessage('Öğrenci başarıyla eklendi.');

  } catch (error) {
  console.error('İstek başarısız:', error);
  }
  setLoading(false);
  };
  
  const updateStudentData = async (values) => {
// mevcut öğrencinin bilgilerinde update edilmesi durumunda
//values formikten gelen data(değiştirilmesi istenilen data burdan alınır)
//selectedStudent : seçili olan öğrenci id'si yardımıyla put işlemi yapılır
    setLoading(true);
    try {
    const response = await fetch(`https://dummyjson.com/users/${selectedStudent.id}` ,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log('İstek başarılı:', data);
    setStudents((prevStudents) => {
      const updatedStudents = prevStudents.map(student => {
        if (student.id === data.id) {
          return data;
        }
        return student;
      });
      return updatedStudents;
    });
    setSuccessMessage('Öğrenci başarıyla güncellendi.');
    } catch (error) {
    console.error('İstek başarısız:', error);
    }
    setLoading(false);
    };
    

    const handleSubmit = (values, { resetForm }) => {
      if (isNewStudent) {
        postStudentData(values);
      }
      else {
        updateStudentData(values);
        }
      resetForm({
        values: initialValues,
      });
    };
  

  const handleAddNewStudent = () => {
    setSuccessMessage('');
    setSelectedStudent(null); 
    setShowForm(true);
  };


  const handleEditStudent = (student) => {
    //tabledan gelen yani değişiklik yapılacak öğrenci id'sine göre update yapılır
    setSuccessMessage('');
    setSelectedStudent(student);
    setShowForm(true);
  };

  const handleCloseForm = () => {
//formun kapatılamsı
    setShowForm(false);
  };
  
  const handleDeleteStudent = (studentId) => {
    //öğrenci silme işlemi
    fetch(`https://dummyjson.com/users/${studentId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log('Öğrenci silindi:', data);
   // Öğrenci silme işlemi aslında delete değil filtreleme durumudur.
   // yani mevcut gelen Id dışındaki diğer tüm öğrencilerin listelenmesidir
        setStudents(prevStudents => prevStudents.filter(student => student.id !== studentId));
      })
      .catch(error => {
        console.error('Öğrenci silme hatası:', error);
      });
  };




  const values = {
    students,
    loading,
    handleSubmit,
    selectedStudent,
    setSearchQuery,
    handleAddNewStudent,
    handleEditStudent,
    handleCloseForm,
    successMessage,
    searchQuery,
    handleDeleteStudent,
    showForm,
    setStudents,
    skip,
    limit,
    setLimit,
    setSkip,
    total,

  
  };

  return (
    <StudentContext.Provider value={values}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);