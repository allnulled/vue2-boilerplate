<template>
    <div class="component HorasPage">
        <table class="width_100x100">
            <thead>
                <tr>
                    <th class="font_small width_100x100 text_align_left">Tarea</th>
                    <th class="font_small width_1x100 text_align_left no_break_line">Horas asignadas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, taskIndex) in tasks" v-bind:key="'task-row-' + taskIndex + '-in-horas-page'">
                    <td class="font_small width_100x100 text_align_left padding_vertical_1">{{ task.name }}</td>
                    <td class="font_small width_1x100 text_align_left">{{ calculateAssignedHours(taskIndex) }}/{{ task.counter }}</td>
                </tr>
            </tbody>
        </table>
        <table class="width_100x100">
            <thead>
                <th class="font_small width_1x100 text_align_left">Hora</th>
                <th class="font_small width_100x100 text_align_left">Tarea</th>
                <th class="font_small width_1x100"></th>
            </thead>
            <tbody v-for="(hour, hourIndex) in hours" v-bind:key="'hour-row-' + hourIndex">
                <tr v-if="current_hour === hourIndex">
                    <td colspan="100">
                        <div id="nowBar" ref="nowBar" style="padding: 10px">
                            <hr />
                            <div class="font_small text_align_center">{{ "Hora actual: " }} {{ $utils.formatDate(new Date(), "hh:mm") }}</div>
                            <hr />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="width_1x100 font_small">
                        {{ hourIndex }}
                    </td>
                    <td class="width_100x100 font_small">
                        {{ hour in tasks ? tasks[hour].name : "-" }}
                    </td>
                    <td class="width_1x100">
                        <button class="control font_small" :class="{ selected_button: selectedRow === hourIndex }" v-on:click="() => toggleRow(hourIndex)">Cambiar</button>
                    </td>
                </tr>
                <tr v-if="selectedRow === hourIndex">
                    <td colspan="100">
                        <ul class="selectable_tasks_list">
                            <li class="font_small link_like margin_vertical_1" v-for="(task, taskIndex) in tasks" v-bind:key="'task-item-' + taskIndex + '-in-horas-page'">
                                <span class="control padding_1" v-if="calculateAssignedHours(taskIndex) < tasks[taskIndex].counter" :class="{ selected_task: hour === taskIndex }" v-on:click="() => assignHour(hourIndex, taskIndex)">{{ task.name }}</span>
                                <span class="control padding_1 completed_task" v-else :class="{ selected_task: hour === taskIndex }">{{ task.name }}</span>
                            </li>
                            <li class="font_small link_like margin_vertical_1" v-on:click="() => assignHour(hourIndex, null)">
                                <span class="control padding_1" :class="{ selected_task: hour === null }">Nada</span>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="width_100x100">
            <tbody>
                <tr>
                    <td class="width_1x100">
                        <button class="circle_button" v-on:click="() => moveTasksDown()">↓</button>
                    </td>
                    <td class="width_100x100 text_align_center">
                        <span class="font_small">Mueve las franjas</span>
                    </td>
                    <td class="width_1x100">
                        <button class="circle_button" v-on:click="() => moveTasksUp()">↑</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
const DEFAULT_HOURS = {"00:00": null,"00:15": null,"00:30": null,"00:45": null,"01:00": null,"01:15": null,"01:30": null,"01:45": null,"02:00": null,"02:15": null,"02:30": null,"02:45": null,"03:00": null,"03:15": null,"03:30": null,"03:45": null,"04:00": null,"04:15": null,"04:30": null,"04:45": null,"05:00": null,"05:15": null,"05:30": null,"05:45": null,"06:00": null,"06:15": null,"06:30": null,"06:45": null,"07:00": null,"07:15": null,"07:30": null,"07:45": null,"08:00": null,"08:15": null,"08:30": null,"08:45": null,"09:00": null,"09:15": null,"09:30": null,"09:45": null,"10:00": null,"10:15": null,"10:30": null,"10:45": null,"11:00": null,"11:15": null,"11:30": null,"11:45": null,"12:00": null,"12:15": null,"12:30": null,"12:45": null,"13:00": null,"13:15": null,"13:30": null,"13:45": null,"14:00": null,"14:15": null,"14:30": null,"14:45": null,"15:00": null,"15:15": null,"15:30": null,"15:45": null,"16:00": null,"16:15": null,"16:30": null,"16:45": null,"17:00": null,"17:15": null,"17:30": null,"17:45": null,"18:00": null,"18:15": null,"18:30": null,"18:45": null,"19:00": null,"19:15": null,"19:30": null,"19:45": null,"20:00": null,"20:15": null,"20:30": null,"20:45": null,"21:00": null,"21:15": null,"21:30": null,"21:45": null,"22:00": null,"22:15": null,"22:30": null,"22:45": null,"23:00": null,"23:15": null,"23:30": null,"23:45": null};

export default {
    name: "HorasPage",
    props: {},
    data() {
      const allTasks = this.$storage.getKey("tareas", { totalIntervals: 96, tasks: {} });
      const allHours = this.$storage.getKey("horas", DEFAULT_HOURS);
      return {
          selectedRow: undefined,
          current_hour: this.roundHour(),
          hours: allHours,
          tasks: allTasks.tasks,
      };
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
        if(this.$refs.nowBar) {
            this.$utils.scrollToElement(this.$refs.nowBar[0]);
        }
    },
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    activated() {},
    deactivated() {},
    methods: {
        roundHour(currentDate = new Date()) {
            let currentMinutesStr = "00";
            const currentMinutes = currentDate.getMinutes();
            if(currentMinutes >= 0 && currentMinutes <= 14) {
                currentMinutesStr = "00";
            } else if(currentMinutes >= 15 && currentMinutes <= 29) {
                currentMinutesStr = "15";
            } else if(currentMinutes >= 30 && currentMinutes <= 29) {
                currentMinutesStr = "30";
            } else if(currentMinutes >= 45) {
                currentMinutesStr = "45";
            }
            const currentHours = currentDate.getHours();
            const currentHoursStr = currentHours < 10 ? "0" + currentHours : currentHours;
            return currentHoursStr + ":" + currentMinutesStr;
        },
        toggleRow(hourIndex) {
            this.selectedRow = this.selectedRow === hourIndex ? undefined : hourIndex;
        },
        assignHour(hourIndex, taskIndex) {
            this.hours[hourIndex] = taskIndex;
            this.$storage.setKey("horas", this.hours);
            this.selectedRow = undefined;
        },
        calculateAssignedHours(taskIndex) {
            let counter = 0;
            for(let hourIndex in this.hours) {
                if(this.hours[hourIndex] === taskIndex) {
                    counter++;
                }
            }
            return counter;
        },
        moveTasksDown() {
            const hourIndexes = Object.keys(this.hours).sort();
            const newHours = {};
            for(let index = 0; index < hourIndexes.length; index++) {
                const hourIndex = hourIndexes[index];
                const previousHourIndex = hourIndexes[index === 0 ? hourIndexes.length - 1 : index - 1];
                const previousHour = this.hours[previousHourIndex];
                newHours[hourIndex] = previousHour;
            }
            this.hours = newHours;
        },
        moveTasksUp() {
            const hourIndexes = Object.keys(this.hours).sort();
            const newHours = {};
            for(let index = 0; index < hourIndexes.length; index++) {
                const hourIndex = hourIndexes[index];
                const nextHourIndex = hourIndexes[index === hourIndexes.length - 1 ? 0 : index + 1];
                const nextHour = this.hours[nextHourIndex];
                newHours[hourIndex] = nextHour;
            }
            this.hours = newHours;
        },
    }

}
</script>

<style>
</style>