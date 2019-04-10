export let QUERY = {
    SELECT_MULTI_STUD_MAPPED_TEACH: "SELECT * FROM student_management.student_teacher_map as STM  LEFT JOIN student S on S.mail_id=STM.stud_mailid where STM.teach_mailid = '$teacher' AND S.mail_id IN ?",
    SELECT_STUD_MAPPED_TEACHER: "SELECT S.mail_id FROM student_management.student_teacher_map as STM LEFT JOIN student_management.student S on STM.stud_mailid =S.mail_id where S.status !='SUSPENDED' AND teach_mailid ='$teacher' ;",
    STUD_TEACH_MAP_MULTI_INSERT: "INSERT INTO student_management.student_teacher_map (stud_mailid, teach_mailid) VALUES ?",
    UPDATE_SUSPEND_STUDENT: "UPDATE student_management.student SET status = 'SUSPENDED' where mail_id='$student'",
    COMMON_STUDENT: "SELECT stud_mailid FROM student_management.student_teacher_map WHERE teach_mailid IN ? GROUP BY stud_mailid HAVING COUNT(stud_mailid) = $count",
    ACTIVE_MULTI_STUDENT: "SELECT mail_id FROM student_management.student where status !='SUSPENDED' AND mail_id in ?"


}