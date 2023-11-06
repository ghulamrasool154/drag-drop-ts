namespace App {
  export interface Draggable {
    dragStartHanlder(event: DragEvent): void;
    dragEndHanlder(event: DragEvent): void;
  }
  export interface DraggTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
}
