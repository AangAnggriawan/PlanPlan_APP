import Api from '../global/api';

class TodoSource {
  static async getAllTodos() {
    const response = await fetch(Api.TodosUrl, {
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2JlLmd1bnoubXkuaWQvYXV0aC9sb2dpbiIsImlhdCI6MTcwMjAyMTU4MSwibmJmIjoxNzAyMDIxNTgxLCJqdGkiOiJGN3BNMjBHSFRDc0FXeTVOIiwic3ViIjoiMzkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.MtUfoN26_SYaSg2Bgv0E7YDYF23T8OV7IPpWc-1b5Ik',
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.todos;
  }

  static async editTodo(id) {
    const response = await fetch(Api.DetailTodoUrl(id));
    return response.json();
  }
}

export default TodoSource;
