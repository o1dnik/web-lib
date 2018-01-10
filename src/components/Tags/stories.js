import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Tags from "./index"

const tags1 = [
  { id: 0, label: "neuropodium" },
  { id: 1, label: "knowledgeably" },
  { id: 2, label: "terminist" },
  { id: 3, label: "prepartition" }
]
const tags2 = [{ id: 0, label: "Stymphalid" }, { id: 1, label: "derm" }]
const tags3 = [
  { id: 0, label: "sulfureous" },
  { id: 1, label: "pupulo" },
  { id: 2, label: "locule" },
  { id: 3, label: "snappable" },
  { id: 4, label: "hypaethron" }
]

storiesOf("Tags", module)
  .add("Default", () => <Tags tags={tags1} />)
  .add("styles", () => (
    <div>
      <div>
        <span>Disabled</span>
        <Tags
          tags={tags1}
          disabled
          onClick={action("clicked")} // makes active unless disabled
          onTagRemove={action("closed")}
        />
      </div>
      <div>
        <span>Not Disabled</span>
        <Tags
          tags={tags1}
          onClick={action("clicked")}
          onTagRemove={action("closed")}
        />
      </div>
      <div>
        <span>Extended</span>
        <Tags
          tags={tags2}
          extended
          onClick={action("clicked")}
          onTagRemove={action("closed")}
        />
      </div>
      <div>
        <span>Type: Active</span>
        <Tags
          tags={tags3}
          type="active"
          onClick={action("clicked")}
          onTagRemove={action("closed")}
        />
      </div>
      <div>
        <span>Type: Inactive</span>
        <Tags tags={tags3} type="inactive" />
      </div>
      <div>
        <span>Type: Pending</span>
        <Tags
          tags={tags3}
          type="pending"
          onClick={action("clicked")}
          onTagRemove={action("closed")}
        />
      </div>
      <div>
        <span>Type: Active && Disabled</span>
        <Tags
          tags={tags3}
          type="active"
          disabled
          onClick={action("clicked")}
          onTagRemove={action("closed")}
        />
      </div>
    </div>
  ))
