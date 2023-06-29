<?php
$tasks = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $taskName = $_POST['taskName'];
  $priority = $_POST['priority'];


  $tasks[] = ['taskName' => $taskName, 'priority' => $priority];

  echo json_encode(['success' => true]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {

  echo json_encode($tasks);
}
?>
