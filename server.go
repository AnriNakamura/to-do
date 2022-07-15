package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Task struct {
	Name string `json:"name"`
	Date string `json:"date"`
}

type Tasks []Task

//show text (text)
/*
func handler(web http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(web, "Welcome to ahiru list !")
}
*/

// return json
func returnTasks(w http.ResponseWriter, r *http.Request) {
	tasks := Tasks{}
	for i := 0; i < 5; i++ {
		name := "task%d"
		tasks = append(
			tasks, Task{Name: fmt.Sprintf(name, i), Date: "Today"})
	}
	json.NewEncoder(w).Encode(tasks)
}

func handleRequest() {
	// http.HandleFunc("/", handler)
	http.HandleFunc("/", returnTasks)
	http.ListenAndServe(":8080", nil)
}

func main() {
	handleRequest()
}
