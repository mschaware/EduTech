import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api/v1";  // Adjust based on your backend

export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getCourses`);
    console.log(response.data);  // Log to verify the structure
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const getCourseById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getCourses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    throw error;
  }
};


// to update th progress

// export const updateProgress = async (progressData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/updateProgress`, progressData, {
//       headers: { "Content-Type": "application/json" },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error updating progress:", error);
//     throw error;
//   }
// };

export const updateProgress = async (courseId, subCourseId, data) => {
  try {
      const response = await axios.post(
          `${API_BASE_URL}/updateProgress/${courseId}/${subCourseId}`,
          data
      );
      return response.data;
  } catch (error) {
      console.error("Error updating progress:", error);
      throw error;
  }
};

export const getSubCourseById = async (courseId, subCourseId) => {
  try {
    console.log(`🔍 Fetching SubCourse | CourseID=${courseId} | SubCourseID=${subCourseId}`);
    
    const response = await axios.get(`${API_BASE_URL}/getCourses/${courseId}/subcourses/${subCourseId}`);
    
    console.log("✅ SubCourse Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching sub-course:", error);
    throw error;
  }
};
