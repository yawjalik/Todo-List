from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Todo(BaseModel):
    id: int
    text: str

todos = []

@app.get("/")
def root():
    return "Todo-List Backend"

@app.get("/todos")
def get_todos():
    return todos

@app.post("/todos")
def add_todo(todo: Todo):
    newTodo = {"id": todo.id, "text": todo.text}
    todos.append(newTodo)
    return newTodo

@app.delete("/todos/{id}")
def delete_todo(id: int):
    global todos
    newTodos = [todo for todo in todos if todo["id"] != id]
    todos = newTodos
    return "Success"