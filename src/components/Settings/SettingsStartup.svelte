<script>
	import { startup, language } from '../../shared/store';
	import { addItem } from '../../shared/storage';
	const app = require('electron').ipcRenderer;

	export let init;
	export let title;

	const setStartup = ({ target: { checked } }) => {
		addItem('startup', checked);
		startup.set(checked);

		app.send('launch-startup', checked);
	};
</script>

<style src="./Settings.scss">

</style>

<button class="skz-settings-back" on:click={init}>
	{language.getWord('Back')}
</button>
<h1 class="skz-settings-title">{title}</h1>
<div for="title" class="skz-settings-switchs">
	<span>{language.getWord('LaunchStartup')}</span>
	<input
		id="skz-startup"
		class="skz-settings-switch"
		type="checkbox"
		on:change={setStartup}
		checked={$startup} />
	<label for="skz-startup" class="skz-settings-switch-label" />
</div>
