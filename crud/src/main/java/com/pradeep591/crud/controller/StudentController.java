package com.pradeep591.crud.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pradeep591.crud.entity.Student;
import com.pradeep591.crud.repository.StudentRepository;
import com.pradeep591.crud.service.StudentService;

import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController 
@RequestMapping("/api/students")
@RequiredArgsConstructor 
public class StudentController {

    private final StudentRepository studentRepository;


    @PostMapping
    public ResponseEntity<Student> createStudent(@RequestBody Student request){
        Student savedStudent = studentRepository.save(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedStudent);

    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

     @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(
            @PathVariable Long id,
            @RequestBody Student updatedStudent) {

        return studentRepository.findById(id)
                .map(student -> {
                    student.setName(updatedStudent.getName());
                    student.setEmail(updatedStudent.getEmail());
                    student.setCourse(updatedStudent.getCourse());

                    Student savedStudent = studentRepository.save(student);
                    return ResponseEntity.ok(savedStudent);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

     @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        if (!studentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        studentRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    
}
