<template>
    <div class="component TareasPage">
        <table class="width_100x100">
            <tbody>
                <tr>
                    <td class="font_small" colspan="100"><span class="bold">Intervalos restantes:</span> {{ totalIntervals }} intervalos</td>
                </tr>
                <tr v-for="(task, taskIndex) in tasks" v-bind:key="'task-row-' + taskIndex">
                    <td class="width_100x100">
                        <input class="control" type="text" v-model="task.name" />
                    </td>
                    <td class="width_1x100">
                        <button class="circle_button" v-on:click="() => decreaseTask(taskIndex)">-</button>
                    </td>
                    <td class="width_1x100 font_small text_align_center">
                        {{ task.counter }}
                    </td>
                    <td class="width_1x100">
                        <button class="circle_button" v-on:click="() => increaseTask(taskIndex)">+</button>
                    </td>
                    <td class="width_1x100">
                        <button class="circle_button" v-on:click="() => deleteTask(taskIndex)">✗</button>
                    </td>
                </tr>
                <tr>
                    <td colspan="100">
                        <button class="control" v-on:click="() => addTask()">+</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TareasPage",
    props: {},
    data() {
      const memo = this.$storage.getKey("tareas", { totalIntervals: 96, tasks: {} });
      return {
          totalIntervals: memo.totalIntervals,
          tasks: memo.tasks,
      };
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    activated() {},
    deactivated() {},
    methods: {
        calculateIntervals() {
            this.totalIntervals = Object.keys(this.tasks).reduce((out, taskId) => {
                out -= this.tasks[taskId].counter;
                return out;
            }, 96);
        },
        saveData() {
            this.calculateIntervals();
            this.$storage.setKey("tareas", { totalIntervals: this.totalIntervals, tasks: this.tasks });
            this.$forceUpdate(true);
        },
        decreaseTask(taskIndex) {
            if(this.tasks[taskIndex].counter === 0) return;
            this.tasks[taskIndex].counter = this.tasks[taskIndex].counter - 1;
            this.saveData();
        },
        increaseTask(taskIndex) {
            if(this.totalIntervals <= 0) return;
            this.tasks[taskIndex].counter = this.tasks[taskIndex].counter + 1;
            this.saveData();
        },
        addTask() {
            this.tasks[this.$utils.getRandomString(25)] = { name: "", counter: 0 };
            this.saveData();
        },
        deleteTask(taskIndex) {
            delete this.tasks[taskIndex];
            this.saveData();
        },
    }
}
</script>

<style>
</style>