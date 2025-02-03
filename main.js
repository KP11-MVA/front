<!DOCTYPE html>
<html lang="en" style="height: 100%;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Monda:wght@400..700&display=swap" rel="stylesheet">
    
    <link rel="shortcut icon" href="./images/favicon.svg" type="image/svg">
    <title>TODO</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style type="text/tailwindcss">
        
        :root {
    --color-gray:#686868;
    --color-pink: #FB6DBB;
    --color-blue: #3B2EEF;
    --color-light-gray: #8784AC;
}
* {
    font-family: monospace;
}
body {
    background-color: #FB6DBB; 
    height: 80%;
}
.card {
    @apply block mx-5 mt-5 bg-white p-5 rounded-lg shadow-2xl h-full gap-4;
}
.titleapp {
    @apply grid justify-center text-5xl mt-10 mb-5 text-black;
    font-family: 'Monda', serif;
}
.btn-todo{
    @apply py-2 w-full text-white rounded-lg duration-300 hover:scale-95 text-2xl;
    background-color: var(--color-blue);
}
.btn-complate{
    @apply btn-todo;
    background-color: var(--color-gray);
}
.task-item{
    @apply flex justify-between items-center my-3 px-5 py-3 text-black rounded-lg;
    box-shadow: 0 0 0 0px transparent,
                inset 3px 4px 16px var(--color-light-gray);
    transition: 0.5s ease;
    
}
.task-item:hover{
    box-shadow: 3px 4px 16px var(--color-light-gray),
                inset 0 0 0 0;
}
.img-set>img{
    @apply cursor-pointer duration-300 hover:scale-125;
}
.footer{
    @apply flex justify-end mx-5 text-gray-600 mt-2;
}
.footer>span{
    @apply bg-white px-3 py-1 rounded-lg italic;
}
.input-task{
    @apply w-full rounded-lg px-5 py-3 mb-3 text-xl;
    box-shadow:inset 1px 1px 10px var(--color-light-gray); 
    border-color: var(--color-pink);
}
input[type="text"], input[type="password"], textarea {
    border: solid 2px var(--color-pink);
    outline: none;
}
/* для Chrome/Edge/Safari */
*::-webkit-scrollbar {
    height: 14px;
    width: 9px;
}
*::-webkit-scrollbar-track {
    background: transparent;
    margin: 10px;
}
*::-webkit-scrollbar-thumb {
    background-color: var(--color-pink);
    border-radius: 15px;
    border: 3px solid white;
    
}
    </style>
    <script src="./main.js"></script>
    <style type="text/tailwindcss">
        .task-item {
            @apply flex justify-between items-center my-3 px-5 py-3 text-black rounded-lg;
            box-shadow: 0 0 0 0px transparent,
                        inset 3px 4px 16px var(--color-light-gray);
            transition: 0.5s ease;
        }
        .task-item:hover {
            box-shadow: 3px 4px 16px var(--color-light-gray),
                        inset 0 0 0 0;
        }
        .completed-task {
            background-color: #d1fae5; 
            border-left: 4px solid #10b981; 
        }
    </style>
</head>
<body>
    <h1 class="titleapp">TODO APP</h1>
    <card class="card z-10" >
        <div class="relative">
            <input id="input-post-task" class="input-task" placeholder="Add text..." type="text" name="" id="">
            <img id="img-post-task" class="cursor-pointer duration-300 hover:scale-125 absolute top-3 right-3" src="./images/galochka.svg" alt="" >
        </div>
        <div class="flex justify-between gap-4">
            <button class="btn-todo">TODO</button>
            <button class="btn-complate">COMPLETED</button>
        </div>
        <div class="mt-2 h-5/6 z-0"  >
            <ul class="h-full overflow-y-auto" id ="task-container">
                <!-- <li class="task-item">
                    <span class="text-lg">TASK NAME</span>
                    <div class="flex gap-4 img-set">
                        <img src="./images/galochka.svg" alt="">
                        <img src="./images/karandash.svg" alt="">
                        <img src="./images/musorka.svg" alt="">
                    </div>
                </li> -->
            </ul>
        </div>
    </card>
</body>
</html>
