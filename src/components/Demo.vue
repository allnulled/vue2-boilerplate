<template>
    <div class="component Demo">
        <div style="text-align: center">
            <h1>Vue2 Boilerplate</h1>
            <h5>Demonstration of all the features available in 'Vue2 Boilerplate' project.</h5>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="index-of-features">Index of features</h3>
            <ol>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Navigation'])">Navigation</span></li>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Internationalization'])">Internationalization</span></li>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Badges'])">Badges</span></li>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Dialogs'])">Dialogs</span></li>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Storage'])">Storage</span></li>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Database'])">Database</span></li>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Routing'])">Routing</span></li>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Styles'])">Styles</span></li>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Forms'])">Forms</span></li>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Push_notifications'])">Push notifications</span></li>
                <li><span class="link_like" v-on:click="$utils.scrollToElement($refs['Checkings'])">Checkings</span></li>
            </ol>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Navigation">Navigation</h3>
            <p>On top of the application, you have 2 components:</p>
            <ul>
                <li><b>Topbar:</b> a nice topbar that will go with you all along the scrolldown.</li>
                <li><b>Navigation:</b> a fixed menu that will appear anytime you click on the topbar's button.</li>
            </ul>
            <p>Click to the top-left button to show and hide the navigation menu.</p>
            <p>You can fully custonmize its contents on the Navigation component.</p>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Internationalization">Internationalization</h3>
            <p>Internationalization is integrated through <b>i18next</b> and <b>@panter/vue-i18next</b>. Also a language detector plugin is attached, <b>i18next-browser-languageDetector</b>. You can change the language, and you will see the string below changed with it:</p>
            <p>String changed with the language (no more to avoid polluting the boilerplate translations): {{ $t("Hello world") }}.</p>
            <select v-model="selectedLanguage">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ca">Català</option>
            </select>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Badges">Badges</h3>
            <p>Try it out, write some message to show in the badge, and throw it:</p>
            <div>
                <p>Title:</p>
                <input type="text" v-model="badgeTitle" placeholder="Title of the badge" />
            </div>
            <div>
                <p>Message:</p>
                <input type="text" v-model="badgeMessage" placeholder="Message of the badge" />
            </div>
            <div>
                <p>Mode:</p>
                <select v-model="badgeMode">
                    <option value="inform">Inform</option>
                    <option value="error">Error</option>
                    <option value="warning">Warning</option>
                </select>
            </div>
            <div>
                <p>Click to send the badge:</p>
                <button v-on:click="onSendBadgeClicked">Send a badge</button>
            </div>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Dialogs">Dialogs</h3>
            <p>Dialogs are also included. You can customize your dialogs, and open them from anypoint of the app.</p>
            <span>
                <button v-on:click="() => $dialogs.open('Hello dialogs!')">Open example of dialog</button>
            </span>
            <span class="padding_left_1">
                <button v-on:click="openLoadingDialogTemporarily">Open loading dialog</button>
            </span>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Storage">Storage</h3>
            <p>By storage, it is meant <b>'localStorage'</b> management. A generic API to get and set storage data is available as a global <b>'$storage'</b> variable, so you can play easily. For example, set some text in the following input, and refresh the page to check that it is saved across visits.</p>
            <div>
                <textarea v-model="storageContents"></textarea>
            </div>
            <div>
                <button v-on:click="saveStorageMessage">Save to storage</button>
            </div>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Database">Database</h3>
            <p>By database, it is meant <b>IndexedDB/Dexie</b> interface, to store data locally.</p>
            <p>Check the files under <b>database/classes/database</b> to see the neat interface you can play with.</p>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Routing">Routing</h3>
            <p>The application boilerplate is provided also with easy inner routing through <b>vue-router</b>. Check the folder at <b>src/routes</b> to customize it by yourself.</p>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Styles">Styles</h3>
            <p>There are 4 CSS files in the project, for you to play with them too. They are loaded in this order:</p>
            <ul>
                <li><b>styles/app</b>: basic styles for the application.</li>
                <li><b>styles/theme</b>: styles that override the application basic styles.</li>
                <li><b>styles/framework</b>: semantic toolkit of styles that can be used to apply styles as an inline mode.</li>
                <li><b>styles/custom</b>: styles that override all the other styles.</li>
            </ul>
            <p>Also, Roboto font is applied generally.</p>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Forms">Forms</h3>
            <p>Some form controls are also attached as Vue2 components, under <b>components/forms</b>.</p>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Push_notifications">Push notifications</h3>
            <p>You can send easily push notifications too. Test it:</p>
            <button v-on:click="$pushNotifications.create('Hello, push notifications!', { vibrate: true })">Hello, push notifications!</button>
        </div>
        <hr />
        <div class="padding_1">
            <h3 ref="Checkings">Checkings</h3>
            <p>Also, you have an utility to do checkings with good error reporting, by <b>$check</b>.</p>
        </div>
        <hr />
        <div class="padding_1">
            <p>Finally, take into account that you do not need to use any of these features, but you have them already included.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Demo",
    props: {},
    data() {
      return {
          badgeTitle: "Title of the badge",
          badgeMessage: "Message of the badge",
          badgeMode: "inform",
          selectedLanguage: undefined,
          storageContents: this.$storage.getKey("demo_message", ""),
      };
    },
    methods: {
        saveStorageMessage() {
            this.$storage.setKey("demo_message", this.storageContents);
        },
        onSendBadgeClicked() {
            this.$badges.send({
                title: this.badgeTitle,
                message: this.badgeMessage,
                mode: this.badgeMode,
            });
        },
        openLoadingDialogTemporarily() {
            const dialog = this.$dialogs.open("Loading dialog", {
                message: "Random message as parameter: " + this.$utils.getRandomString(5)
            });
            setTimeout(() => {
                dialog.close();
                this.$forceUpdate(true);
            }, 5000);
        }
    },
    watch: {
        selectedLanguage(v) {
            this.$i18n.i18next.changeLanguage(v);
        },
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
        this.selectedLanguage = this.$i18n.i18next.language;
    },
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    activated() {},
    deactivated() {},

}
</script>

<style scope>

</style>