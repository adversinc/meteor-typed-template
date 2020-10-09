interface TypedEventsMap<T> {
	[key: string]: (event: Meteor.Event, template: T) =>
		void | boolean | Promise<void> | Promise<boolean>;
}

export interface TypedTemplate<T extends Blaze.TemplateInstance> extends Blaze.Template {
	onCreated: (cb: (this: T) => void) => void;
	onRendered: (cb: (this: T) => void) => void;
	onDestroyed: (cb: (this: T) => void) => void;

	events: (eventsMap: TypedEventsMap<T>) => void;

	// Meteor internals fix
	__helpers: any;
}
