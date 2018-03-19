declare namespace bradmax.player {

	type SkinName = 'gorilla' | 'mole' | 'snake' | 'zebra';

	/* configuration */
	type Configuration = {
		/* URL pointing to json file with media data. */
		dataSource?: string;
		/* JavaScript object with media data. */
		dataProvider?: ConfigurationDataProvider;
		/* Configuration object for player advertisement. */
		advertisement?: ConfigurationAdvertisement;
		/* Configuration object for freewheel advertisement. */
		freewheel?: ConfigurationFreewheel;
		/* Indicates if player should play video after player load. */
		autoplay?: boolean;
		/* Indicates if player skin should be visible at player start. */
		showSkinOnInit?: boolean;
		/* List of comma separated social button names. */
		shareButtons?: ConfigurationShareButtons;
		/*  Name of end splash view to use. */
		endSplash?: string;
	};

	type ConfigurationDataProvider = any;

	type ConfigurationAdvertisement = any;

	type ConfigurationFreewheel = any;

	type ConfigurationShareButtons = 'embed' | 'facebook' | 'twitter';

	/* Event */
	type Event = {
		className: string;
		type: string;
		data: EventData | null;
	};

	type EventData = any;

	/* not public */
	// type PlayerPlugin = any;

	/* not public */
	// type PlayerConfiguration = {
	// 	builds: any[];
	// 	dependencies: any[];
	// 	plugins: any[];
	// 	variables: any[];
	// }

	/* not public */
	// type PlayerData = {
	// 	bradmaxDataProvider?: any;
	// 	bradmaxDataReportErrors?: boolean;
	// 	target: string;
	// }

	/* not public */
	// type PlayerBasicSkin = any;
	// type PlayerBradmaxDataProvider = any;
	// type PlayerVideo = any;
	// type PlayerVimeoWrapper = any;
	// type PlayerYoutubeWrapper = any;

	class PlayerJavascriptApi {
		getVersion(): string;
		onClose(e: any): void;
		play(): void;
		pause(): void;
		playPause(): void;
		seek(timeMs: number): void;
		setVolume(value: number): void;
		on(eventName: string, callback: (e: any) => void): void;
		add(eventClassName: string, callback: (e: any) => void): void;
		addOnce(eventClassName: string, callback: (e: any) => void): void;
		remove(eventClassName: string, callback: (e: any) => void): void;
		/* not public */
		// skinConfig_updateColor(color: string): void;
		// skinConfig_updateColorScheme(colorScheme: { [name: string]: string }): void;
		// skinConfig_getColorScheme(): { [name: string]: string };
		// skinConfig_disableAutohide(disable: boolean): void;
		// skinConfig_editLogo(data?: string | null, link?: string | null, target?: string | null): void;
		// skinConfig_editShareButtons(buttons: string[]): void;
		// skinConfig_editEndSplash(endSplash?: string | null): void;
		// skinConfig_setPlayerState(state: string): void;
		// skinConfig_showBufferSpinner(state: string): void;
	}

	type PlayerModules = {
		/* not public */
		// BasicSkin: PlayerBasicSkin;
		// BradmaxDataProvider: PlayerBradmaxDataProvider;
		JavascriptApi: PlayerJavascriptApi;
		/* not public */
		// Video: PlayerVideo;
		// VimeoWrapper: PlayerVimeoWrapper;
		// YoutubeWrapper: PlayerYoutubeWrapper;
	};

	/* not public */
	// type PlayerMap = { [player: string]: Player };
	// type PlayerEventHub = { plugins: any[]; };

	type Player = {
		/* not public */
		// configuration: PlayerConfiguration;
		// data: PlayerData;
		// eventHub: PlayerEventHub;
		modules: PlayerModules;
		/* not public */
		// parent: HTMLElement;
		// plugins: PlayerPlugin[];
		// pluginsVideo: PlayerPlugin[];
		// uid: string;
	};

	/* not public */
	// type FontMap = { [font: string]: boolean };

	/* not public */
	// var composers: PlayerMap;
	// var embeder: PlayerMap;
	// var embeders: PlayerMap;
	// var fonts: FontMap;

	function create(container: Element, config?: any, pid?: string, position?: string, composerId?: string): Player;
	function destroy(player: Player): void;
	function getById(id: string): any;
	/* not public */
	// function registerFont(name: string, data: any): void;
}

declare var player: bradmax.player.Player;
declare var api: bradmax.player.PlayerJavascriptApi;
