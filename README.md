The strictly typed template support for Meteor.

# Usage

```typescript
import {TypedTemplate} from "meteor-typed-template";

//
// Declaration
interface CurrentTemplate extends Blaze.TemplateInstance {
    ready: ReactiveVar<boolean>;
    count: ReactiveVar<number>;

    nonReactive: string;
}

// This is required for Template.instance() to work
declare var Template: TemplateStatic<CurrentTemplate>;
// This turns the rest of template to strictly typed
const currentTemplate = <TypedTemplate<CurrentTemplate>>Template.templateName;


//
// Further usage
currentTemplate.onCreated(function() {
    // All template properties are typed
    this.ready = new ReactiveVar(false);
    this.count = new ReactiveVar(1);
    this.nonReactive = "";
});

currentTemplate.helpers({
    isReady() {
        // The following is now strictly typed
        return Template.instance().ready.get();
    }
});

currentTemplate.events({
    "click .button-reset"(event, template) {
        // event and template are now typed too 
        template.count.set(0);
    }
});
```

