import axios from "axios";
import { useEffect, useState } from "react";
// import { DarkModeContext } from "../context/Context";

function Categories() {
  const [setCategories] = useState([]);
  const [setLoading] = useState(true);
  const [setError] = useState(null);
  // let { token } = useContext(DarkModeContext);
  // Function to fetch data from API
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://tradingsociety.net/api/v1/category",
        {
          headers: {
            Authorization: `Bearer 29|Ty80fgEhfB5ll2b5og6dTY5WJWqIxwPCZRD2jVNOa50891a8`,
          },
        }
      );
      setCategories(response?.data?.categories?.data); // setting the categories data
      console.log(response);
      setLoading(false);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Failed to fetch categories");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  //   return (
  //     <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
  //       <Typography variant="h4" gutterBottom>
  //         Categories List
  //       </Typography>
  //       {loading && (
  //         <Box display="flex" justifyContent="center" alignItems="center">
  //           <CircularProgress />
  //         </Box>
  //       )}
  //       {error && (
  //         <Alert severity="error">
  //           {error}
  //         </Alert>
  //       )}
  //       {!loading && !error && (
  //         <Grid container spacing={3}>
  //           {categories.map((category) => (
  //             <Grid item xs={12} sm={6} md={4} key={category.id}>
  //               <Card sx={{ backgroundColor: '#2C2C2C', color: '#fff' }}>
  //                 <CardContent>
  //                   <Typography variant="h6">
  //                     {category.category_name}
  //                   </Typography>
  //                 </CardContent>
  //               </Card>
  //             </Grid>
  //           ))}
  //         </Grid>
  //       )}
  //     </Box>
  //   );
}

export default Categories;
