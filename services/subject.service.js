import axios from "axios";

class SubjectService {
  async getAllSubjects() {
    const response = await axios.get("/api/subjects")
    return response.data
  }
}

export default new SubjectService()