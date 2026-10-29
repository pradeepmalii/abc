package com.pradeep591.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pradeep591.crud.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
    
}
